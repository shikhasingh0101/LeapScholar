import Application from "../../models/userModel.js";
import sendEmailNotification from "../notification/emailService.js";
import CounselingSlot from "../../models/CounselingSlot.js";

const resolvers = {
  Query: {
    hello: () => "Hello, World!",

    availableSlots: async () => {
      try {
        return await CounselingSlot.find({});
      } catch (error) {
        console.error("Error fetching available slots:", error.message);
        throw new Error("Failed to fetch available slots");
      }
    },
  },
  
  Mutation: {
    // Adding an application
    async addApplication(
      _,
      {
        name,
        email,
        phone,
        country,
        intake,
        program,
        educationLevel,
        graduationYear,
        expectedPercentage,
        passportStatus,
        englishTestStatus,
        hasUniversityAdmit,
        currentCity,
      }
    ) {
      try {
        // Create a new application document with all fields
        const newApplication = new Application({
          name,
          email,
          phone,
          country,
          intake,
          program,
          educationLevel,
          graduationYear,
          expectedPercentage,
          passportStatus,
          englishTestStatus,
          hasUniversityAdmit,
          currentCity,
        });

        // Save the application in MongoDB
        const savedApp = await newApplication.save();

        // Send Email Notification
        await sendEmailNotification(email, name, country, intake);

        return savedApp; // Return the saved application
      } catch (error) {
        console.error("Error in addApplication resolver:", error.message);
        throw new Error("Failed to save application");
      }
    },

    // Booking a counseling slot
    bookSlot: async (_, { slotId, userId }) => {
      try {
        const slot = await CounselingSlot.findById(slotId);
        if (!slot || slot.status !== "available") {
          return { success: false, message: "Slot not available" };
        }
        slot.status = "booked";
        slot.user = userId;
        await slot.save();
        return { success: true, message: "Slot booked successfully" };
      } catch (error) {
        console.error("Error in bookSlot resolver:", error.message);
        return { success: false, message: "Failed to book slot" };
      }
    },
  },
};

export default resolvers;

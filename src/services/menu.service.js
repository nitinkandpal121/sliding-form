import axios from "axios";

const API_URL = "https://test.ezworks.ai/form-api"; // <<-- update this to your real backend URL

export const submitForm = async ({ name, mobile, email, service, message, receiveEmails }) => {
  try {
    const response = await axios.post(API_URL, {
      name,
      country_code:91,
      phone_no,
      email,
      service,
      message,
      promotion,
    });
    console.log("Form submitted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};

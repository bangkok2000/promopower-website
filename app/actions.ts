"use server";

export async function submitJobseekerApplication(prevState: any, formData: FormData) {
  // Simulate a network delay for UX
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Parse payload
  const payload = Object.fromEntries(formData.entries());
  console.log("🔥 [SERVER] Received Jobseeker Application:");
  console.log(payload);
  
  return { success: true, timestamp: new Date().toISOString() };
}

export async function submitContactInquiry(prevState: any, formData: FormData) {
  // Simulate a network delay for UX
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Parse payload
  const payload = Object.fromEntries(formData.entries());
  console.log("💼 [SERVER] Received Corporate Inquiry:");
  console.log(payload);
  
  return { success: true, timestamp: new Date().toISOString() };
}

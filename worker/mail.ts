type MailAttachment = {
  filename: string;
  type: string;
  content: string;
};

type SendMailOptions = {
  to: string;
  fromEmail: string;
  fromName: string;
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: MailAttachment[];
};

export async function sendMail(options: SendMailOptions): Promise<{ ok: true } | { ok: false; error: string }> {
  const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: options.to }] }],
      from: { email: options.fromEmail, name: options.fromName },
      reply_to: options.replyTo ? { email: options.replyTo, name: options.replyTo } : undefined,
      subject: options.subject,
      content: [{ type: "text/plain", value: options.text }],
      attachments: options.attachments,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    return {
      ok: false,
      error:
        detail.includes("DNS") || response.status === 403
          ? "Email could not be sent yet. The sending domain may need DNS configuration (see forms setup notes)."
          : "Unable to send your submission. Please try again or email us directly.",
    };
  }

  return { ok: true };
}

export async function fileToAttachment(file: File): Promise<MailAttachment> {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const chunkSize = 24576;
  let content = "";

  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    const slice = bytes.subarray(offset, Math.min(offset + chunkSize, bytes.length));
    let binary = "";
    for (let index = 0; index < slice.length; index += 1) {
      binary += String.fromCharCode(slice[index]!);
    }
    content += btoa(binary);
  }

  return {
    filename: file.name.replace(/[^\w.\- ]+/g, "").slice(0, 120) || "upload",
    type: file.type,
    content,
  };
}

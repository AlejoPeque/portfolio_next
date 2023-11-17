import { EmailTemplate } from "@/components/contact/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_i5wnZEmv_Hc57URRNa9BMv3imFrBgQT9K");

export async function POST(req) {
  try {
    const { email, mensaje } = req.body;

    const data = resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["alejopequeno25@gmail.com"],
      subject: "Contact Portfolio",
      react: EmailTemplate({ email, mensaje }),
      text: "",
    });

    console.log(data);
    return NextResponse.json({ message: "Email enviado" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error al enviar el email" },
      { status: 500 }
    );
  }
}

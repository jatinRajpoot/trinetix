import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import ContactClient from "./ContactClient";

export const metadata:Metadata={title:"Start a project",description:"A website, an app or a spark of an idea. Tell TriNetix what you’re planning and get a clear way forward."};

export default function ContactPage(){
  return <div><PageHeading label="Your next big thing starts here" title={<>Got an idea?<br/>We’re all ears.</>} description="A few rough notes, a question, or a wildly ambitious plan. Tell us what you have in mind. We’ll help you work out a clear next step."/><div id="project-brief" className="scroll-mt-24"><ContactClient/></div></div>;
}

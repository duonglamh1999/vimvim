"use client";
import { Panels } from "@/components/panels";
import { PanelProps } from "@/components/panels/Panel";
import LevelDropDown from "@/components/levelDropdown";
import VimEditor from "@/components/vimEditor";
import TextEditor from "@/components/textEditor";
import { TextField } from "@mui/material";
import { useState } from "react";
import { FormType } from "./type";

export default function CreatePage() {
  const defaultFormState: FormType = {
    title: "",
    prompt: "May the prompt be with you",
    solution: "Solution?? What's that?",
    initialContent: "Thou shall show them the begining",
    expectedString: "Thou shall show them the end",
    level: "",
  };
  const [formState, setFormState] = useState(defaultFormState);

  const left: PanelProps = {
    labels: ["Prompt", "Solution", "Discussion"],
    contents: [
      <PromptContent title={formState.title} prompt={formState.prompt} />,
      <TextEditor content={formState.solution} />,
      <>Coming Soon :(</>,
    ],
    actions: [{ component: <LevelDropDown /> }],
  };
  const right: PanelProps = {
    labels: ["Vim", "Expected"],
    contents: [
      <VimEditor contents="Thou shall show them the begining" />,
      <VimEditor contents="Thou shall show them the end result" />,
    ],
  };
  return <Panels left={left} right={right}></Panels>;
}

type PromptProp = {
  title: string;
  prompt: string;
};
const PromptContent: React.FC<PromptProp> = ({ title, prompt }) => {
  return (
    <>
      <TextField label="Title" content={title} />
      <TextEditor content={prompt} />
    </>
  );
};

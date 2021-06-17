import React from "react";
import { Control, Controller } from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";
import { FormState } from ".";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type Props = {
  control: Control<FormState>;
}

const DescriptionField = ({ control }: Props) => (
  <Controller
    name="description"
    control={control}
    render={({ value, onChange }) => (
      <Editor
        toolbarClassName="toolbar-container"
        editorClassName="editor-container"
        editorState={value}
        onEditorStateChange={onChange}
      />
    )}
  />
);

export default DescriptionField;
import React from "react";
import { Child, ChildState } from "../@types/types";
import { AccordionHeader, AccordionItem, Button, CheckboxInput, Text } from "../styles/style";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface AccordionItemProps {
  child: Child;
  childStates: Record<string, ChildState>;
  setChildStates: React.Dispatch<React.SetStateAction<Record<string, ChildState>>>;
}

export default function AccordionItemComponent({
  child,
  childStates,
  setChildStates,
}: AccordionItemProps) {
  const state = childStates[child.id];

  const handleCheckboxChange = (currentChild: Child, checked: boolean) => {
    const newChildStates = { ...childStates };

    const updateStates = (currentChild: Child, isChecked: boolean) => {
      newChildStates[currentChild.id].checked = isChecked;
      newChildStates[currentChild.id].indeterminate = false;

      Object.values(currentChild.children).forEach((subchild) =>
        updateStates(subchild, isChecked)
      );
    };

    updateStates(currentChild, checked);
    setChildStates(newChildStates);
  };

  const toggleExpand = (id: string) => {
    const newChildStates = { ...childStates };
    newChildStates[id].expanded = !newChildStates[id].expanded;
    setChildStates(newChildStates);
  };

  return (
    <AccordionItem key={child.id} level={child.level}>
      <AccordionHeader>
        <CheckboxInput
          type="checkbox"
          checked={state.checked}
          onChange={(e) => handleCheckboxChange(child, e.target.checked)}
          ref={(el) => el && (el.indeterminate = state.indeterminate)}
          aria-label={`checkbox-${child.id}`}
        />
        <Button onClick={() => toggleExpand(child.id)}>
          {Object.keys(child.children).length > 0 ? (
            state.expanded ? (
              <CiCircleMinus size={24} />
            ) : (
              <CiCirclePlus size={24} />
            )
          ) : null}
        </Button>
        <Text>{child.name}</Text>
      </AccordionHeader>
      {state.expanded && (
        <div>
          {Object.values(child.children).map((subchild) => (
            <AccordionItemComponent
              key={subchild.id}
              child={subchild}
              childStates={childStates}
              setChildStates={setChildStates}
            />
          ))}
        </div>
      )}
    </AccordionItem>
  );
}

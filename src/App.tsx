import React from "react";
import { api } from "./lib/axios";
import { GlobalStyle } from "./styles/global";
import { Child, ChildState } from "./@types/types";
import AccordionItemComponent from "./components/AccordionItemComponent";
import { LinkButtons } from "./styles/style";

export default function App() {
  const [data, setData] = React.useState<Child | null>(null);
  const [childStates, setChildStates] = React.useState<Record<string, ChildState>>(
    {}
  );

  const [id, setId] = React.useState<number>(0);

  const idsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

  async function fetchData() {
    const response = await api.get<Child>(`${id}`);
    setData(response.data);
    if (response.data) {
      initializeChildStates(response.data);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, [id]);

  function initializeChildStates(child: Child) {
    const newChildStates: Record<string, ChildState> = {};
    const initChildStates = (child: Child) => {
      newChildStates[child.id] = {
        checked: false,
        indeterminate: false,
        expanded: false,
      };
      Object.values(child.children).forEach((subchild) =>
        initChildStates(subchild)
      );
    };
    initChildStates(child);
    setChildStates(newChildStates);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <GlobalStyle />
      <h1 style={{ marginBottom: '1rem' }}>Teste Hi Platform</h1>

      {idsArray.map((id: number) => (
        <LinkButtons onClick={() => setId(id)} value={id} key={id}>{id}</LinkButtons>
      ))}

      {data && (
        <AccordionItemComponent
          childStates={childStates}
          setChildStates={setChildStates}
          child={data}
        />
      )}
    </div>
  );
}

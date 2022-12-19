import ReactDOM from "react-dom";

jest.mock("react-dom/client", () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: jest.fn(),
  })),
}));

test("renders with App and root div", () => {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
  require("./index.tsx");
  //expect(ReactDOM.render).toHaveBeenCalled();
});

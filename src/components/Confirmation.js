import { useLocation } from "react-router-dom";
export default function Confirmation() {
  const { state } = useLocation();
  return (
    <div className="container">
      <h1>Thank You!</h1>
      <p>You're now registered for Red30 Tech.</p>
      { state && (
        <p>We have sent more details to {state.name}.</p>
      )}
    </div>
  );
}

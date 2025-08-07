import WidthContainer from "./WidthContainer";

export default function Section({ children }) {
  return (
    <>
      <section className="py-4">
        <WidthContainer>{children}</WidthContainer>
      </section>
    </>
  );
}

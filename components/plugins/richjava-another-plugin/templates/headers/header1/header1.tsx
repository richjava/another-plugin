export default function Header1({ content }: any) {
  if (!content) return <></>;
  return (
    <section id="header-1" className="container template">
      <p>Plugin header</p>
    </section>
  );
}

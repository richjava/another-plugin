import { DataView } from "@/components/plugins/richjava-another-plugin/shared/data-view/data-view";
export default function Cover1({ content }: any) {
  if (!content) return <></>;
  return (
    <section id="cover-1" className="container template">
      <p>Plugin: Cover 1</p>
    </section>
  );
}

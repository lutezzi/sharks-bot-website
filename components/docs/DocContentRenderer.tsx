import type { DocSection } from "@/lib/docs-content";

export function DocContentRenderer({ sections }: { sections: DocSection[] }) {
  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <section key={index}>
          {section.heading && (
            <h2 className="mb-4 text-xl font-semibold text-white">{section.heading}</h2>
          )}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-base leading-8 text-zinc-400">
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className="mb-4 list-disc space-y-2 pl-6 text-zinc-400">
              {section.list.map((item) => (
                <li key={item} className="leading-7">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.code && (
            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-[#c9b6e4]">
              <code>{section.code}</code>
            </pre>
          )}
        </section>
      ))}
    </div>
  );
}

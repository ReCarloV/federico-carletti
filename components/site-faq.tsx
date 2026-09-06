'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { faqs } from '@/lib/site-content';

export function SiteFaq() {
  return (
    <Accordion className="faq-list" defaultValue={[0]}>
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={index} className="faq-item">
          <AccordionTrigger className="faq-question">{faq.question}</AccordionTrigger>
          <AccordionContent className="faq-answer"><p>{faq.answer}</p></AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

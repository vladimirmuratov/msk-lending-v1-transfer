import { Banner } from '@/components/Banner';
import { text1 } from '@/config';
import { TextBlock } from '@/components/TextBlock';
import { ContactsBlock } from '@/components/ContactsBlock';
import { FormAction } from '@/components/FormAction';
import { MainInfoBlock } from '@/components/MainInfoBlock';
import { CoordinatorBlock } from '@/components/CoordinatorBlock';
import PhoneBlock from '@/components/PhoneBlock';

export default function Home() {
    return (
        <main style={{ position: 'relative' }}>
            <Banner />
            {/*<CardsBlock />*/}
            <PhoneBlock text="Ответим на любые вопросы о переводе в московскую клинику. Звоните!" />
            <MainInfoBlock />
            <PhoneBlock text="Остались вопросы? Звоните!" />
            {/*<AboutBlock />*/}
            {/*<WhyWeBlock />*/}
            {/*<PhoneBlock />*/}
            {/*<WeRespondBlock />*/}
            {/*<WhatWeOfferBlock/>*/}
            {/*<DirectionsOfHospitalizationBlock />*/}
            {/*<PhoneBlock />*/}
            {/*<BaseAccordion id="faq" title="Частые вопросы" items={faq} />*/}
            <CoordinatorBlock />
            {/*<PartnersBlock />*/}
            {/*<PhoneBlock />*/}
            {/*<BaseAccordion id="service" title="Услуги" items={services} />*/}
            <TextBlock text={text1} />
            <ContactsBlock />
            <FormAction />
        </main>
    );
}

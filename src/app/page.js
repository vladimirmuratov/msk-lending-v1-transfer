import {Banner} from '@/components/Banner'
import {CardsBlock} from '@/components/CardsBlock'
import {AboutBlock} from '@/components/AboutBlock'
import {WhyWeBlock} from '@/components/WhyWeBlock'
import {WeRespondBlock} from '@/components/WeRespondBlock'
// import {WhatWeOfferBlock} from '@/components/WhatWeOfferBlock'
import {DirectionsOfHospitalizationBlock} from '@/components/DirectionsOfHospitalizationBlock'
import {BaseAccordion} from '@/components/base/Accordion/BaseAccordion'
import {PartnersBlock} from '@/components/PartnersBlock'
import {faq, services, text1} from '@/config'
import {TextBlock} from '@/components/TextBlock'
import {ContactsBlock} from '@/components/ContactsBlock'
import {FormAction} from '@/components/FormAction'
import {MainInfoBlock} from '@/components/MainInfoBlock'
import {CoordinatorBlock} from '@/components/CoordinatorBlock'
import PhoneBlock from '@/components/PhoneBlock'

export default function Home() {
        return (
            <main style={{position: 'relative'}}>
                    <Banner/>
                    <CardsBlock/>
                    <PhoneBlock/>
                    <MainInfoBlock/>
                    <PhoneBlock/>
                    <AboutBlock/>
                    <WhyWeBlock/>
                    <PhoneBlock/>
                    <WeRespondBlock/>
                    {/*<WhatWeOfferBlock/>*/}
                    <DirectionsOfHospitalizationBlock/>
                    <PhoneBlock/>
                    <BaseAccordion id="faq" title="Частые вопросы" items={faq}/>
                    <CoordinatorBlock/>
                    <PartnersBlock/>
                    <PhoneBlock/>
                    <BaseAccordion id="service" title="Услуги" items={services}/>
                    <TextBlock text={text1}/>
                    <ContactsBlock/>
                    <FormAction/>
            </main>
        )
}

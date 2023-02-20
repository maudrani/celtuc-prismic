import Section from '@/components/Base/Section';
import Promo from '@/components/Sections/Promo';
import TextOnImage from '@/components/Sections/TextOnImage';
import React from 'react';

const Components = () => {
  return (
    <Section
      type="page"
      data={{ background_color: 'light-1', max_width: 'full', size: 'sm' }}
    >
      <Promo
        data={{
          themeName: 'light-1',
          direction: 'top',
          img_animation: 'fade_in',
          title_animation: 'split_to_top',
          padding_t: 2,
        }}
        content={{
          tag: { text: 'Nuevo!' },
          subtitle: { text: '**iPhone 14 & iPhone 14 Pro**' },
          title: {
            text: '#### **Fundas y Cases**',
            color: 'purple-blue-1',
            type: 'gradient',
            direction: 'left',
          },
          description: {
            text: `Todas nuestras fundas en un solo lugar. 
            Consulta por **promociones y descuentos!**`,
          },
        }}
        ctas={[
          {
            type: 'button',
            text: 'Comprar',
            href: '',
          },
          {
            type: 'link',
            text: 'Consultar',
            href: '',
          },
        ]}
        img={{
          src: '/img/static/test/cases-1.png',
        }}
        z
      />

      <Promo
        data={{
          themeName: 'content-gray-1',
          direction: 'left',
          img_animation: 'fade_in',
          title_animation: 'split_to_top',
          text_direction: 'center',
          spacing: 'md',
        }}
        content={{
          subtitle: { text: '**Fundas**' },
          title: {
            text: `#### **Walden**`,
            color: ['mine-shaft', 'jumbo'],
            type: 'gradient',
            direction: 'left',
          },
          description: {
            text: `Encontra todas las fundas Walden al mejor precio. 
            Somos distribuidores oficiales.`,
          },
        }}
        ctas={[
          {
            type: 'button',
            text: 'Comprar',
            href: '',
          },
          {
            type: 'link',
            text: 'Ver mas',
            href: '',
          },
        ]}
        img={{
          src: '/img/static/test/walden-4.png',
        }}
      />

      <TextOnImage
        data={{
          themeName: 'content-white-1',
          background_color: 'light-1',
          direction: 'right',
          text_direction: 'right',
          size: 'md',
          text_size: 'sm',
          padding: 'xs',
          round: 'xl',
          align_y: 'center',
        }}
        content={{
          tag: { text: 'New' },
          subtitle: {
            text: '**iPhone 14**',
          },
          title: {
            text: `**THIS IS IT. 
            FOR NO ONE ELSE. 
            JUST FOR YOU.**`,
          },
          description: {
            text: `From $33.29/mo. for 24 mo. or $799 before trade‑in1`,
          },
        }}
        ctas={[
          {
            type: 'button',
            text: 'Entrar',
            href: '',
          },
        ]}
        img={{
          src: '/img/static/test/walden-3.jpg',
        }}
      />

      <Promo
        data={{
          themeName: 'light-1',
          direction: 'top',
          title_animation: 'typed_text',
          padding: '4',
          padding_t: '6',
          spacing_t: 'lg',
        }}
        content={{
          title: {
            text: `### **Nuestras promociones.**`,
            type: 'solid',
          },
          description: {
            text: '#### Aprovecha descuentos de hasta un **35%**.',
          },
        }}
        ctas={[
          {
            type: 'button',
            text: 'Ver todas las promociones',
            href: '',
          },
        ]}
      />

      <TextOnImage
        data={{
          themeName: 'red-1',
          size: 'lg',
          text_size: 'md',
          max_width: 'full',
          direction: 'center',
          background_color: 'white',
          padding: 'xs',
          title_animation: 'split_to_top',
          img_animation: 'fade_in',
        }}
        content={{
          tag: {
            text: 'New',
          },
          subtitle: {
            text: '**Ofertas de**',
          },
          title: {
            text: `**San Valentin**`,
          },
          description: {
            text: 'From $33.29/mo. for 24 mo. or $799 before trade‑in1',
          },
        }}
        ctas={[
          {
            type: 'button',
            text: 'Comprar',
            href: '',
          },
          {
            type: 'link',
            text: 'Ver mas',
            href: '',
          },
        ]}
        img={{
          src: '/img/static/test/iphone-img-test-5.jpg',
        }}
      />
      <TextOnImage
        data={{
          themeName: 'light-3',
          background_color: 'white',
          direction: 'left',
          size: 'lg',
          text_size: 'lg',
          max_width: 'full',
          padding: 'xs',
        }}
        content={{
          subtitle: {
            text: '**Descuento 15%**',
          },
          title: {
            text: ` **Equipos usados**`,
          },
        }}
        ctas={[
          {
            type: 'link',
            text: 'Ver ahora',
            href: '',
          },
        ]}
        img={{
          src: '/img/static/test/promo-1.jpg',
        }}
      />
      <TextOnImage
        data={{
          themeName: 'content-white-1',
          background_color: 'white',
          padding_b: '6',
          direction: 'right',
          size: 'lg',
          text_size: 'xl',
          max_width: 'full',
          padding: 'xs',
          title_animation: 'split_to_top',
        }}
        content={{
          subtitle: {
            text: '**Nuevo**',
          },
          title: {
            text: `#### **S23 Ultra**`,
            type: 'gradient',
            color: ['white', 'jumbo'],
            direction: 'top',
          },
        }}
        ctas={[
          {
            type: 'link',
            text: 'Ver ahora',
            href: '',
          },
        ]}
        img={{
          src: '/img/static/test/promo-2.jpg',
        }}
      />

      <Promo
        data={{
          themeName: 'content-white-1',
          direction: 'right',
          text_direction: 'center',
          img_animation: 'fade_in',
          title_animation: 'typed_text',
          max_width: 'lg',
        }}
        content={{
          tag: { text: 'Descubre' },
          title: {
            text: '#### **Servicio Tecnico.**',
            color: 'light-1',
            type: 'solid',
          },
          description: {
            text: 'Consulta por todos los dispositivos **Apple** y otras marcas.',
          },
        }}
        ctas={[
          {
            type: 'button',
            text: 'Contacto',
            href: '',
          },
          {
            type: 'link',
            text: 'Ver mas',
            href: '',
          },
        ]}
        img={{ src: '/img/static/test/service-1.png' }}
      />
    </Section>
  );
};

export default Components;

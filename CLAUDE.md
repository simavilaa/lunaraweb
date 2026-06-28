# Lunara IT — Proyecto Web

> Este archivo es la fuente de verdad del proyecto. Leelo antes de tomar decisiones de diseño o arquitectura. Si algo no está acá, preguntá antes de asumir.

## Qué es Lunara

Lunara IT es un emprendimiento de tecnología en Argentina (Buenos Aires). Es un proyecto de una persona (técnico fundador) que ofrece:

- **Servicio técnico de PCs**: reparación, armado, cambio de piezas, upgrades.
- **Infraestructura para pymes**: redes, cableado, configuración, servidores.
- **Sistemas y soporte IT** para empresas chicas y medianas.
- **Ciberseguridad** básica/intermedia para pymes.

## Posicionamiento de marca

- **Personalidad**: el técnico cercano y resolutivo. NO una corporación fría e impersonal.
- **Sensación a transmitir**: cercanía, trato humano, confianza técnica.
- **Doble público**: arranca atrayendo a uno y crece al otro.
  - Usuario particular (repara/arma su PC).
  - Pyme (redes, infraestructura, ciberseguridad).
- El nombre "Lunara" es una marca propia, evocadora (vibra tipo nombre de banda, algo Radiohead), NO descriptiva. El fundador NO quiere su nombre personal visible en la marca.
- Tono de comunicación: humano, claro, en español rioplatense, sin tecnicismos innecesarios. Explicar antes de tecnificar.

## Identidad visual

- **Nombre de marca**: Lunara
- **Nombre completo / lockup**: "lunara" en minúsculas + "IT" como sufijo.
- **Handle social**: @lunarait
- **Símbolo**: luna creciente sólida con tres ondas de señal (wifi/conexión) saliendo del borde interno. Representa luna (marca) + conexión/redes (rubro IT). Archivos en `assets/`:
  - `lunara-logo.svg` — versión violeta.
  - `lunara-logo-mono.svg` — usa `currentColor`, se adapta a negro o blanco según contexto.
- **Tipografía del nombre**: serif clásica (elegante, con carácter). Sugerencias: Playfair Display, Fraunces, o similar serif con contraste. El resto de la UI puede usar una sans limpia (Inter, Geist) para legibilidad.
- **Estética general**: con textura/onda áspera tipo Radiohead/Stanley Donwood como acento (en fondos, detalles), pero el logo y la UI principal limpios y legibles. Lo áspero es condimento, no la base.

## Paleta

- **Acento principal**: violeta `#7C3AED` (lunar, se despega del azul tech genérico).
- **Violeta oscuro** (hover/profundidad): `#5B21B6`.
- **Violeta claro** (fondos suaves): `#EDE9FE`.
- **Base oscura** (fondos sección dark): `#0F0E17` (casi negro con tinte noche, no negro plano).
- **Texto sobre claro**: `#1A1A2E`.
- **Neutros**: grises estándar para texto secundario y bordes.
- Modo: priorizar un look limpio. Se puede usar dark en hero/secciones de impacto y light en contenido.

## Stack técnico

- **Framework**: Next.js (App Router) + TypeScript.
- **Estilos**: Tailwind CSS con los tokens de la paleta configurados en `tailwind.config`.
- **Por qué**: escalable de landing a multi-página sin reescribir, SEO fuerte (clave para captar pymes vía Google), mantenible.

## Alcance — Fase 1 (landing)

Empezar con una landing de una página (scroll) pensada para crecer a sitio completo después. Secciones sugeridas para la landing:

1. **Hero**: logo, nombre, propuesta de valor en una frase, CTA principal (WhatsApp).
2. **Servicios**: las dos patas (particular + pyme) claras, con íconos.
3. **Por qué Lunara / confianza**: el diferencial humano, cercano y resolutivo.
4. **Cómo trabajo / proceso**: pasos simples (diagnóstico → presupuesto → solución).
5. **Contacto**: WhatsApp Business como canal principal, mail, redes.
6. **Footer**: handle @lunarait, datos, zona de cobertura.

## Buenas prácticas a respetar

- Componentes reutilizables y bien tipados.
- Accesibilidad (semántica HTML, contraste, alt text, navegación por teclado).
- SEO: metadata, Open Graph, sitemap, datos estructurados para negocio local.
- Responsive mobile-first (mucho tráfico va a venir de celular).
- Performance: imágenes optimizadas, lazy loading, buen Lighthouse.
- Preparar la estructura para sumar páginas (servicios detallados, blog, casos) sin refactor grande.

## Decisiones tomadas (no revisar sin consultar)

- Nombre: Lunara. Cerrado.
- Símbolo: luna + ondas de señal. Cerrado.
- Acento: violeta. Cerrado.
- Tipografía nombre: serif. Cerrado.
- Stack: Next.js + TS + Tailwind. Cerrado.

## Pendientes que dependen del fundador

- Verificar disponibilidad de dominio (lunarait.com / .com.ar) en un registrador / NIC.ar.
- Verificar @lunarait en Instagram.
- Número de WhatsApp Business, mail definitivo, zona de cobertura exacta.
- Textos finales / fotos de trabajos reales para la sección de confianza.

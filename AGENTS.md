# AGENTS.md

Este proyecto mantiene sus reglas de agente en **`CLAUDE.md`** (fuente de verdad única).

Si estás leyendo esto desde un agente que no es Claude Code, lee `CLAUDE.md` antes de
tocar cualquier archivo, y `spec.md` para la tarea actual.

@CLAUDE.md

---

## Resumen mínimo (por si no puedes seguir el import)

- **Proyecto:** prototipo de layout frontend, Next.js 16 + App Router + Turbopack +
  TypeScript + Tailwind v4, para landings de un despacho de abogados penalistas en Houston
  (Gary Tabakman, PLLC). Es **una sola página**; la navegación interna son anclas.
- **Alcance:** solo layout estático. Sin backend, sin lógica, sin estado, sin envío de
  formularios.
- **Gestor de paquetes:** pnpm. No uses `npm install`.
- **Estilos:** únicamente los design tokens de `globals.css`. Ningún color nuevo.
  Todo estilo global va dentro de `@layer base` — una regla sin capa le gana a las
  utilidades de Tailwind y rompe el espaciado de la página entera.
- **Contenido:** únicamente el guion en `context/`. Nada inventado — en especial resultados
  de casos, cifras o testimonios: es publicidad legal. Hay **una** excepción autorizada y
  documentada (cifras de demo en `CaseResults.tsx`, marcadas en el propio archivo con
  `⚠ CIFRAS DE DEMO — NO PUBLICAR SIN VERIFICAR`). No la extiendas a otras secciones.
- **Estructura:** `spec.md` describe el layout construido, sección por sección, y el porqué
  de las decisiones que se re-litigaron varias veces (traslape del formulario flotante,
  gaps del grid, tamaño mínimo de la imagen del hero, capas de CSS). Léelo antes de tocar
  layout. El orden de render **no** es el orden numérico de las secciones. **El código es
  la fuente de verdad.** No introduzcas cambios estructurales nuevos sin consultar.
- **Verificación:** `pnpm lint`, `npx tsc --noEmit`, `pnpm build` deben pasar antes de dar
  por terminada cualquier sección. La revisión visual a 1440px y 375px la hace el usuario.
  No dejes servidores `next dev` corriendo.

Reglas completas y no negociables: `CLAUDE.md`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Taameem · تعميم — clickable prototype

From a regulatory announcement to approved changes and proof, inside the institution's own map.
Built for the Financial Market Innovation Hackathon (The Financial Academy · Capital Market Authority), Track 01 RegTech & Compliance Automation.

نموذج أولي قابل للنقر: تعميم رقابي واحد يمرّ بسبع خطوات، من وصوله إلى ما تستلمه الجهة الرقابية.
البيانات مُهيّأة مسبقاً للعرض (لا يوجد ذكاء اصطناعي حي في هذه النسخة). التعاميم حقيقية الشكل، والبنك افتراضي.

## Run it / التشغيل

Open `index.html` in any browser. That is the whole app: one file, no server, no install.

- Simple view (default): a seven-step strip, one line per step, an example, and what to press.
- Full view: the detailed screens with the AI / manual switch. Toggle it from the top bar.
- Arabic / English and dark / light from the top bar.
- URL options: `?view=simple|full`, `?screen=1..7`, `?lang=ar|en`, `?theme=dark|light`, `?full` (all steps pre-completed).

افتح `index.html` في أي متصفح. ملف واحد بدون خادم وبدون تثبيت.

## The seven steps / الخطوات السبع

| # | Step | Who |
|---|------|-----|
| 1 | Circular arrives (collected daily from SAMA, CMA, IA) | System |
| 2 | AI reads it: Arabic text → clear rules | AI |
| 3 | Person approves every rule | Human |
| 4 | What must change vs. the bank's own policies and systems | AI |
| 5 | Tasks per team, owner and deadline | AI |
| 6 | Proof collected, fingerprinted, report approved by a person | Human |
| 7 | Sent to regulator: it receives only what the bank sends (future, needs an agreement) | Future |

The AI proposes. A person approves. The regulator receives only what the bank sends.

## Edit and rebuild / التعديل

Source is `src/proto.template.html` (React 18 UMD + Tailwind CDN, all in one file; texts in the `T` object, bilingual).
Logos live in `assets/`. After editing, run:

```
node build.js
```

which writes a fresh `index.html`.

## Team / الفريق

Areej Almalki · Abdulrhman Altayash · Ibrahim Alshanqiti · Rawan Aldosari · Abdulhakeem Almidan

## License

© 2026 Team Taameem. Shared for hackathon evaluation.

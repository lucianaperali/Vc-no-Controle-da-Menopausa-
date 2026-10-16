'use strict';

/* ------------------------------------------------------------------ *
 * Dados fixos
 * ------------------------------------------------------------------ */

const SYMPTOMS = [
  { id: 'fogachos', label: 'Fogachos (ondas de calor)', icon: '🔥',
    tips: ['Vista roupas em camadas, de algodão ou tecidos leves, para tirar e pôr conforme o calor.',
           'Mantenha o quarto fresco e leve um leque ou garrafa de água gelada na bolsa.',
           'Observe seus gatilhos (café, álcool, comida picante, estresse) e reduza os que piorarem.',
           'Respiração lenta e profunda (6 respirações por minuto) por alguns minutos ajuda em muitas mulheres.',
           'Se atrapalham a rotina, converse com seu médico: existem tratamentos hormonais e não hormonais.'] },
  { id: 'suor', label: 'Suor noturno', icon: '💦',
    tips: ['Use roupa de cama de algodão e camadas que possam ser retiradas.',
           'Deixe o quarto bem ventilado e evite jantar pesado, álcool e cafeína à noite.',
           'Tenha uma muda de pijama e uma toalha por perto para trocar sem acordar totalmente.'] },
  { id: 'insonia', label: 'Dificuldade para dormir', icon: '🌙',
    tips: ['Mantenha horários regulares para deitar e acordar, inclusive nos fins de semana.',
           'Evite telas e luz forte na hora anterior ao sono; deixe o quarto escuro e fresco.',
           'Evite cafeína depois do almoço e refeições pesadas à noite.',
           'Atividade física regular (de preferência antes do fim da tarde) melhora o sono.',
           'Se a insônia durar semanas, procure avaliação médica: há tratamentos eficazes, como a terapia cognitivo-comportamental para insônia.'] },
  { id: 'ansiedade', label: 'Ansiedade', icon: '😰',
    tips: ['Pratique respiração lenta, meditação ou alongamento por 5 a 10 minutos por dia.',
           'Movimente-se: caminhadas regulares reduzem ansiedade e melhoram o humor.',
           'Reduza cafeína e álcool, que podem intensificar a ansiedade e as palpitações.',
           'Fale com alguém de confiança e, se a ansiedade atrapalhar o dia a dia, busque apoio profissional.'] },
  { id: 'humor', label: 'Irritabilidade / oscilação de humor', icon: '🎭',
    tips: ['Sono e movimento regulares estabilizam o humor.',
           'Anote o que antecede os momentos mais difíceis: o registro ajuda a enxergar padrões.',
           'Comunique às pessoas próximas o que está acontecendo; o apoio faz diferença.',
           'Tristeza persistente ou perda de interesse por duas semanas ou mais merecem avaliação profissional.'] },
  { id: 'cansaco', label: 'Cansaço / falta de energia', icon: '🪫',
    tips: ['Priorize o sono e distribua as tarefas mais pesadas para os horários em que você tem mais energia.',
           'Mantenha-se hidratada e faça refeições equilibradas, com proteína em todas elas.',
           'Cansaço intenso e persistente pode ter outras causas (como anemia ou tireoide): converse com seu médico.'] },
  { id: 'nevoa', label: 'Névoa mental / esquecimentos', icon: '🌫️',
    tips: ['Use listas, alarmes e agenda para aliviar a memória de trabalho.',
           'Durma bem e pratique exercícios: ambos ajudam a atenção e a memória.',
           'Em geral é uma fase passageira, mas mencione ao médico se for intensa ou piorar com o tempo.'] },
  { id: 'articulacoes', label: 'Dores nas articulações / músculos', icon: '🦴',
    tips: ['Exercícios de fortalecimento e alongamento ajudam a aliviar a dor e protegem os ossos.',
           'Aplique calor local e mantenha-se ativa; evitar movimento costuma piorar a rigidez.',
           'Converse com seu médico sobre dor persistente e sobre saúde óssea (cálcio, vitamina D, densitometria).'] },
  { id: 'cabeca', label: 'Dor de cabeça', icon: '🤕',
    tips: ['Anote horário, intensidade e possíveis gatilhos (sono, jejum, álcool, estresse).',
           'Hidratação e refeições regulares ajudam a prevenir crises.',
           'Dor de cabeça nova, muito forte ou diferente do habitual deve ser avaliada por um médico.'] },
  { id: 'palpitacoes', label: 'Palpitações', icon: '💓',
    tips: ['Reduza cafeína, álcool e nicotina, que podem desencadear palpitações.',
           'Respire lentamente e sente-se até passar.',
           'Procure avaliação médica para descartar outras causas, principalmente se vierem com dor no peito, falta de ar ou desmaio.'] },
  { id: 'ressecamento', label: 'Ressecamento vaginal / desconforto íntimo', icon: '🌸',
    tips: ['Hidratantes e lubrificantes à base de água ou silicone aliviam o desconforto e podem ser usados com frequência.',
           'Há tratamentos locais seguros (como estrogênio vaginal) que seu ginecologista pode indicar.',
           'Não é "normal sofrer calada": é um sintoma comum e tratável.'] },
  { id: 'libido', label: 'Queda da libido', icon: '💞',
    tips: ['Converse abertamente com o(a) parceiro(a) sobre as mudanças; intimidade vai além do sexo.',
           'Trate o ressecamento e durma bem: ambos influenciam o desejo.',
           'Se isso incomoda você, fale com seu médico: há abordagens que podem ajudar.'] },
  { id: 'inchaco', label: 'Inchaço / mudança de peso', icon: '⚖️',
    tips: ['Priorize proteínas, fibras e treino de força, que ajudam a preservar massa muscular.',
           'Reduza ultraprocessados, açúcar e álcool; o metabolismo muda e pequenos ajustes fazem diferença.',
           'Observe seu sono: dormir mal favorece o ganho de peso.'] },
  { id: 'cabelo', label: 'Queda de cabelo / pele seca', icon: '💇‍♀️',
    tips: ['Proteja a pele do sol e use hidratante diariamente.',
           'Evite excesso de calor e químicas no cabelo.',
           'Queda de cabelo intensa merece investigação (ferro, tireoide); procure um dermatologista.'] },
];

const TRIGGERS = [
  { id: 'cafe', label: '☕ Café / cafeína' },
  { id: 'alcool', label: '🍷 Álcool' },
  { id: 'picante', label: '🌶️ Comida picante' },
  { id: 'estresse', label: '😤 Dia estressante' },
  { id: 'exercicio', label: '🏃‍♀️ Exercício' },
  { id: 'calor', label: '🌡️ Ambiente quente' },
];

const MOODS = [
  { v: 1, e: '😞', l: 'Muito mal' },
  { v: 2, e: '🙁', l: 'Mal' },
  { v: 3, e: '😐', l: 'Regular' },
  { v: 4, e: '🙂', l: 'Bem' },
  { v: 5, e: '😄', l: 'Muito bem' },
];

const LEVELS = ['Nenhum', 'Leve', 'Moderado', 'Forte'];
const STORAGE_KEY = 'vcm.entries.v1';

/* ------------------------------------------------------------------ *
 * Utilidades
 * ------------------------------------------------------------------ */

const $ = (sel, root = document) => root.querySelector(sel);

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function dateKey(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function parseKey(k) {
  const [y, m, d] = k.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function addDays(k, n) {
  const d = parseKey(k);
  d.setDate(d.getDate() + n);
  return dateKey(d);
}

function fmtDate(k, opts = { weekday: 'long', day: 'numeric', month: 'long' }) {
  return parseKey(k).toLocaleDateString('pt-BR', opts);
}

const avg = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);
const fmt1 = (n) => n.toFixed(1).replace('.', ',');

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 1600);
}

/* ------------------------------------------------------------------ *
 * Armazenamento (somente no aparelho)
 * ------------------------------------------------------------------ */

let memoryStore = {}; // fallback se o localStorage estiver indisponível

function loadAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return memoryStore;
  }
}

function saveAll(data) {
  memoryStore = data;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    toast('Não foi possível salvar neste navegador.');
  }
}

function blankEntry() {
  return { symptoms: {}, mood: 0, sleep: '', triggers: [], period: false, notes: '' };
}

function getEntry(k) {
  return { ...blankEntry(), ...(loadAll()[k] || {}) };
}

function isEmpty(e) {
  return !Object.values(e.symptoms).some((v) => v > 0) && !e.mood && e.sleep === '' &&
    !e.triggers.length && !e.period && !e.notes.trim();
}

function putEntry(k, e) {
  const all = loadAll();
  if (isEmpty(e)) delete all[k];
  else all[k] = e;
  saveAll(all);
}

const dayScore = (e) => Object.values(e.symptoms).reduce((a, b) => a + b, 0);

/* ------------------------------------------------------------------ *
 * Telas
 * ------------------------------------------------------------------ */

const state = { tab: 'hoje', date: dateKey() };

function render() {
  document.querySelectorAll('.tabbar button').forEach((b) => {
    const on = b.dataset.tab === state.tab;
    b.classList.toggle('active', on);
    if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  });
  const views = { hoje: viewHoje, historico: viewHistorico, padroes: viewPadroes, guia: viewGuia };
  $('#view').innerHTML = views[state.tab]();
}

/* ---------- Hoje ---------- */

function viewHoje() {
  const e = getEntry(state.date);
  const today = dateKey();
  const isToday = state.date === today;

  const symptoms = SYMPTOMS.map((s) => `
    <div class="sym" data-sym="${s.id}">
      <div class="sym-name"><span aria-hidden="true">${s.icon}</span> ${esc(s.label)}</div>
      <div class="seg" role="group" aria-label="${esc(s.label)}">
        ${LEVELS.map((l, v) => `<button type="button" data-v="${v}" aria-pressed="${(e.symptoms[s.id] || 0) === v}">${l}</button>`).join('')}
      </div>
    </div>`).join('');

  return `
    <h2>${isToday ? 'Como você está hoje?' : 'Registro de ' + esc(fmtDate(state.date))}</h2>
    <p class="muted">${esc(fmtDate(state.date))}. Leva menos de 1 minuto e é salvo automaticamente.</p>
    <p class="muted">Este é um app de apoio: ele ajuda você a registrar e observar seus sintomas, mas <b>não faz diagnóstico</b>.</p>

    <div class="card">
      <label class="field" for="date">Data do registro</label>
      <input type="date" id="date" value="${state.date}" max="${today}">
    </div>

    <div class="card">
      <h3>Seus sintomas</h3>
      ${symptoms}
    </div>

    <div class="card">
      <h3>Humor geral</h3>
      <div class="chips moods" role="group" aria-label="Humor geral">
        ${MOODS.map((m) => `<button type="button" class="chip" data-mood="${m.v}" aria-label="${m.l}" aria-pressed="${e.mood === m.v}">${m.e}</button>`).join('')}
      </div>
    </div>

    <div class="card">
      <label class="field" for="sleep">Horas dormidas na noite anterior</label>
      <input type="number" id="sleep" inputmode="decimal" min="0" max="24" step="0.5" placeholder="Ex.: 6,5" value="${e.sleep}">
    </div>

    <div class="card">
      <h3>O que aconteceu no dia?</h3>
      <div class="chips" role="group" aria-label="Gatilhos e hábitos do dia">
        ${TRIGGERS.map((t) => `<button type="button" class="chip" data-trigger="${t.id}" aria-pressed="${e.triggers.includes(t.id)}">${t.label}</button>`).join('')}
        <button type="button" class="chip" data-period aria-pressed="${e.period}">🩸 Menstruei</button>
      </div>
    </div>

    <div class="card">
      <label class="field" for="notes">Observações</label>
      <textarea id="notes" placeholder="Algo que queira lembrar de contar ao médico?">${esc(e.notes)}</textarea>
    </div>

    ${!isToday ? `<div class="btn-row"><button class="btn ghost" data-goto-today>Voltar para hoje</button></div>` : ''}
  `;
}

function updateEntry(mutator) {
  const e = getEntry(state.date);
  mutator(e);
  putEntry(state.date, e);
  return e;
}

/* ---------- Histórico ---------- */

function viewHistorico() {
  const all = loadAll();
  const keys = Object.keys(all).sort().reverse();
  const items = keys.map((k) => {
    const e = { ...blankEntry(), ...all[k] };
    const syms = SYMPTOMS.filter((s) => e.symptoms[s.id] > 0)
      .sort((a, b) => e.symptoms[b.id] - e.symptoms[a.id])
      .map((s) => `<span class="tag">${s.icon} ${esc(s.label.split(' (')[0].split(' /')[0])} · ${LEVELS[e.symptoms[s.id]].toLowerCase()}</span>`).join('');
    const mood = MOODS.find((m) => m.v === e.mood);
    const d = parseKey(k);
    return `
      <div class="card entry" data-open="${k}" tabindex="0" role="button" aria-label="Editar registro de ${esc(fmtDate(k))}">
        <div class="date">${d.getDate()}<small>${esc(d.toLocaleDateString('pt-BR', { month: 'short' }))}</small></div>
        <div class="body">
          <div><span class="score">Intensidade: ${dayScore(e)}</span>${mood ? ' · ' + mood.e : ''}${e.sleep !== '' ? ' · 😴 ' + esc(e.sleep) + ' h' : ''}${e.period ? ' · 🩸' : ''}</div>
          <div>${syms || '<span class="muted">Sem sintomas</span>'}</div>
          ${e.notes ? `<div class="muted">${esc(e.notes.slice(0, 120))}${e.notes.length > 120 ? '…' : ''}</div>` : ''}
        </div>
      </div>`;
  }).join('');

  return `
    <h2>Histórico</h2>
    ${keys.length ? items : '<div class="card"><p>Você ainda não fez nenhum registro.</p><div class="btn-row"><button class="btn" data-goto-today>Fazer o primeiro registro</button></div></div>'}
    ${keys.length ? `
    <div class="card">
      <h3>Seus dados</h3>
      <p class="muted">Tudo fica salvo apenas neste aparelho. Exporte para levar à consulta ou guardar uma cópia.</p>
      <div class="btn-row">
        <button class="btn ghost" data-export-csv>Exportar CSV</button>
        <button class="btn ghost" data-export-json>Backup (JSON)</button>
        <button class="btn ghost" data-import-json>Restaurar backup</button>
        <button class="btn danger" data-clear>Apagar tudo</button>
      </div>
      <input type="file" id="import-file" accept="application/json" hidden>
    </div>` : ''}
  `;
}

function download(name, type, content) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportCSV() {
  const all = loadAll();
  const q = (s) => `"${String(s).replace(/"/g, '""')}"`;
  const head = ['data', ...SYMPTOMS.map((s) => s.label), 'humor (1-5)', 'horas de sono', 'gatilhos', 'menstruou', 'observações'];
  const rows = Object.keys(all).sort().map((k) => {
    const e = { ...blankEntry(), ...all[k] };
    return [k, ...SYMPTOMS.map((s) => e.symptoms[s.id] || 0), e.mood || '', e.sleep,
      e.triggers.map((t) => (TRIGGERS.find((x) => x.id === t) || {}).label || t).join('; '),
      e.period ? 'sim' : '', e.notes].map(q).join(',');
  });
  // BOM para o Excel reconhecer os acentos
  download('menopausa-registros.csv', 'text/csv;charset=utf-8', '﻿' + [head.map(q).join(','), ...rows].join('\n'));
}

function importJSON(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('formato');
      const clean = {};
      for (const [k, v] of Object.entries(data)) {
        if (/^\d{4}-\d{2}-\d{2}$/.test(k) && v && typeof v === 'object') clean[k] = { ...blankEntry(), ...v };
      }
      saveAll({ ...loadAll(), ...clean });
      toast(`${Object.keys(clean).length} registros restaurados.`);
      render();
    } catch {
      toast('Arquivo inválido.');
    }
  };
  reader.readAsText(file);
}

/* ---------- Padrões ---------- */

function recentEntries(days, endKey = dateKey()) {
  const all = loadAll();
  const out = [];
  for (let i = 0; i < days; i++) {
    const k = addDays(endKey, -i);
    if (all[k]) out.push({ k, e: { ...blankEntry(), ...all[k] } });
  }
  return out;
}

/* Compara a intensidade média dos dias com e sem uma condição. Só devolve
 * quando há dados suficientes dos dois lados, para não inventar padrões. */
function compare(entries, pred) {
  const yes = entries.filter(({ e }) => pred(e)).map(({ e }) => dayScore(e));
  const no = entries.filter(({ e }) => !pred(e)).map(({ e }) => dayScore(e));
  if (yes.length < 3 || no.length < 3) return null;
  return { yes: avg(yes), no: avg(no), nYes: yes.length, nNo: no.length };
}

function viewPadroes() {
  const last30 = recentEntries(30);
  if (last30.length < 3) {
    return `
      <h2>Seus padrões</h2>
      <div class="card">
        <p>Para identificar padrões, preciso de pelo menos <b>3 dias</b> de registro nos últimos 30 dias. Você tem <b>${last30.length}</b>.</p>
        <p class="muted">Quanto mais regular o registro, mais útil o resultado.</p>
        <div class="btn-row"><button class="btn" data-goto-today>Registrar hoje</button></div>
      </div>`;
  }

  const scores = last30.map(({ e }) => dayScore(e));
  const total30 = avg(scores);

  // Tendência: últimos 7 dias x 7 dias anteriores
  const w1 = recentEntries(7).map(({ e }) => dayScore(e));
  const w2 = recentEntries(7, addDays(dateKey(), -7)).map(({ e }) => dayScore(e));
  let trend = '';
  if (w1.length >= 3 && w2.length >= 3) {
    const a = avg(w1), b = avg(w2);
    const diff = b ? (a - b) / b : 0;
    if (diff <= -0.15) trend = `<p>📉 <b>Boa notícia:</b> seus sintomas estão <b>menos intensos</b> que na semana anterior (média ${fmt1(a)} contra ${fmt1(b)}).</p>`;
    else if (diff >= 0.15) trend = `<p>📈 Seus sintomas estão <b>mais intensos</b> que na semana anterior (média ${fmt1(a)} contra ${fmt1(b)}). Vale observar o que mudou e conversar com seu médico se persistir.</p>`;
    else trend = `<p>➖ Seus sintomas estão <b>estáveis</b> em relação à semana anterior (média ${fmt1(a)} contra ${fmt1(b)}).</p>`;
  }

  // Ranking de sintomas
  const ranking = SYMPTOMS.map((s) => {
    const vals = last30.map(({ e }) => e.symptoms[s.id] || 0);
    const days = vals.filter((v) => v > 0);
    return { s, freq: days.length, avg: avg(days) };
  }).filter((r) => r.freq > 0).sort((a, b) => b.freq * b.avg - a.freq * a.avg).slice(0, 6);

  const bars = ranking.length ? ranking.map((r) => `
    <div class="bar-row">
      <span>${r.s.icon} ${esc(r.s.label.split(' (')[0].split(' /')[0])}</span>
      <div class="bar" aria-hidden="true"><b style="width:${Math.round((r.freq / last30.length) * 100)}%"></b></div>
      <span class="n">${r.freq}/${last30.length}</span>
    </div>`).join('') : '<p class="muted">Nenhum sintoma registrado.</p>';

  // Gráfico dos últimos 30 dias
  const all = loadAll();
  const maxScore = Math.max(1, ...Object.values(all).map((x) => dayScore({ ...blankEntry(), ...x })));
  const spark = Array.from({ length: 30 }, (_, i) => {
    const k = addDays(dateKey(), i - 29);
    if (!all[k]) return `<span class="empty" title="${esc(fmtDate(k, { day: 'numeric', month: 'short' }))}: sem registro"></span>`;
    const sc = dayScore({ ...blankEntry(), ...all[k] });
    return `<span style="height:${Math.max(4, (sc / maxScore) * 100)}%" title="${esc(fmtDate(k, { day: 'numeric', month: 'short' }))}: ${sc}"></span>`;
  }).join('');

  // Relações com sono e gatilhos
  const findings = [];
  const sleepCmp = compare(last30.filter(({ e }) => e.sleep !== ''), (e) => Number(e.sleep) < 6);
  if (sleepCmp && sleepCmp.yes > sleepCmp.no * 1.2) {
    findings.push(`😴 Nos dias após dormir <b>menos de 6 horas</b>, seus sintomas foram em média <b>${Math.round((sleepCmp.yes / Math.max(sleepCmp.no, 0.1) - 1) * 100)}% mais intensos</b> (${fmt1(sleepCmp.yes)} contra ${fmt1(sleepCmp.no)}).`);
  }
  for (const t of TRIGGERS) {
    const c = compare(last30, (e) => e.triggers.includes(t.id));
    if (!c) continue;
    const label = t.label.replace(/^\S+\s/, '');
    if (t.id === 'exercicio') {
      if (c.yes < c.no * 0.8) findings.push(`🏃‍♀️ Nos dias com <b>exercício</b>, seus sintomas foram menos intensos (${fmt1(c.yes)} contra ${fmt1(c.no)}).`);
    } else if (c.yes > c.no * 1.2) {
      findings.push(`${t.label.split(' ')[0]} Em dias com <b>${esc(label.toLowerCase())}</b>, os sintomas foram mais intensos (${fmt1(c.yes)} contra ${fmt1(c.no)}).`);
    }
  }

  // Ciclo
  const periods = Object.keys(all).filter((k) => all[k].period).sort();
  let cycle = '';
  if (periods.length) {
    const last = periods[periods.length - 1];
    const days = Math.round((parseKey(dateKey()) - parseKey(last)) / 86400000);
    cycle = `<div class="card"><h3>🩸 Menstruação</h3>
      <p>Último registro: <b>${esc(fmtDate(last, { day: 'numeric', month: 'long' }))}</b> (há ${days} dia${days === 1 ? '' : 's'}).</p>
      ${days >= 60 ? '<p class="muted">Intervalos longos são comuns na perimenopausa. Converse com seu médico para avaliar o seu caso.</p>' : ''}
    </div>`;
  }

  return `
    <h2>Seus padrões</h2>
    <p class="muted">Com base nos últimos 30 dias.</p>

    <div class="card">
      <div class="stats">
        <div><b>${last30.length}</b><span>dias registrados</span></div>
        <div><b>${fmt1(total30)}</b><span>intensidade média/dia</span></div>
        <div><b>${Math.max(...scores)}</b><span>pior dia</span></div>
      </div>
      ${trend ? `<div style="margin-top:12px">${trend}</div>` : ''}
    </div>

    <div class="card">
      <h3>Intensidade por dia</h3>
      <div class="spark" aria-label="Gráfico de intensidade dos últimos 30 dias">${spark}</div>
      <p class="muted" style="margin-top:6px">Barras mais altas = dias mais difíceis. Cinza = sem registro.</p>
    </div>

    <div class="card">
      <h3>Sintomas mais frequentes</h3>
      ${bars}
      <p class="muted">Número de dias em que apareceu / dias registrados.</p>
    </div>

    <div class="card">
      <h3>O que parece influenciar</h3>
      ${findings.length ? findings.map((f) => `<p>${f}</p>`).join('') : '<p class="muted">Ainda não há dados suficientes para apontar relações. Continue registrando sono e hábitos do dia (são necessários ao menos 3 dias com e sem cada hábito).</p>'}
      <p class="muted">São associações observadas nos seus registros, não prova de causa.</p>
    </div>

    ${cycle}

    <div class="btn-row"><button class="btn ghost" data-print>Imprimir / salvar PDF para a consulta</button></div>
    <p class="muted"><b>App de apoio:</b> os padrões mostrados são apenas observações dos seus próprios registros. Não são diagnóstico nem indicação de tratamento. Leve-os à sua consulta para que um profissional de saúde avalie o seu caso.</p>
  `;
}

/* ---------- Guia ---------- */

function viewGuia() {
  return `
    <h2>Guia de orientações</h2>
    <p class="muted">Informações gerais e de apoio. Não substituem a avaliação de um profissional de saúde.</p>

    <div class="card">
      <h3>ℹ️ Importante</h3>
      <p>Este é um <b>app de apoio</b>. Ele <b>não faz diagnóstico</b>, não indica remédios ou tratamentos e <b>não substitui</b> consulta, exames ou orientação de um profissional de saúde. Em caso de dúvida, procure uma Unidade Básica de Saúde ou o seu médico.</p>
    </div>

    <div class="card alert">
      <h3>⚠️ Procure atendimento se houver</h3>
      <ul>
        <li>Sangramento muito intenso, com coágulos, ou após 12 meses sem menstruar.</li>
        <li>Dor no peito, falta de ar, desmaio ou palpitações com mal-estar.</li>
        <li>Tristeza profunda, desesperança ou pensamentos de se machucar. No Brasil, o CVV atende 24h pelo <b>188</b>.</li>
        <li>Sintomas que atrapalham seu trabalho, sono ou relações.</li>
      </ul>
      <p><b>Emergência:</b> SAMU <b>192</b>. Dúvidas sobre saúde: Disque Saúde <b>136</b> (Ministério da Saúde). Para acompanhamento, procure a Unidade Básica de Saúde (UBS) mais próxima de você.</p>
    </div>

    <div class="card">
      <h3>O que é a menopausa?</h3>
      <p>É a última menstruação, confirmada após 12 meses seguidos sem menstruar (em média por volta dos 48 a 52 anos). Os anos de transição que a antecedem se chamam <b>perimenopausa</b>, com ciclos irregulares e sintomas causados pelas mudanças hormonais.</p>
      <p>Cada mulher vive essa fase de um jeito. Há muito o que fazer para se sentir melhor.</p>
    </div>

    <div class="card">
      <h3>Hábitos que ajudam em tudo</h3>
      <ul>
        <li><b>Movimento:</b> combine atividade aeróbica com treino de força (protege ossos e músculos).</li>
        <li><b>Alimentação:</b> proteína em todas as refeições, fibras, cálcio e vitamina D.</li>
        <li><b>Sono:</b> horários regulares e quarto fresco e escuro.</li>
        <li><b>Estresse:</b> respiração, meditação, pausas e vida social.</li>
        <li><b>Consultas:</b> mantenha em dia exames como mamografia, preventivo e densitometria, conforme orientação médica.</li>
      </ul>
    </div>

    <div class="card">
      <h3>Dicas por sintoma</h3>
      ${SYMPTOMS.map((s) => `
        <details class="tip">
          <summary>${s.icon} ${esc(s.label)}</summary>
          <ul>${s.tips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        </details>`).join('')}
    </div>

    <div class="card">
      <h3>💗 Sobre este app</h3>
      <p>O <b>Você no Controle da Menopausa</b> é uma agenda de sintomas oferecida <b>gratuitamente</b> para ajudar as mulheres a acompanhar essa fase com mais informação e tranquilidade.</p>
      <p>Desenvolvido pela <b>PeralIA Tech</b>.</p>
    </div>

    <div class="card">
      <h3>🔒 Privacidade</h3>
      <p>Seus registros ficam <b>somente neste aparelho</b>. O app não pede nome, e-mail, telefone nem login, e não envia nenhuma informação para a Prefeitura, para a internet ou para terceiros.</p>
      <p>Por isso, se você limpar os dados do navegador ou trocar de celular, os registros se perdem: use <b>Histórico › Backup</b> para guardar uma cópia. Quem usar o mesmo aparelho pode ver seus registros.</p>
      <p>Você pode apagar tudo a qualquer momento em <b>Histórico › Apagar tudo</b>.</p>
    </div>

    <div class="card">
      <h3>Levando o registro à consulta</h3>
      <p>Na aba <b>Padrões</b>, imprima ou salve o resumo em PDF. Na aba <b>Histórico</b>, exporte os dados completos. Isso ajuda o profissional de saúde a entender como você tem se sentido. Só ele pode avaliar o seu caso e indicar o que faz sentido para você.</p>
    </div>
  `;
}

/* ------------------------------------------------------------------ *
 * Eventos
 * ------------------------------------------------------------------ */

document.querySelector('.tabbar').addEventListener('click', (ev) => {
  const b = ev.target.closest('button[data-tab]');
  if (!b) return;
  state.tab = b.dataset.tab;
  render();
  window.scrollTo(0, 0);
});

const view = $('#view');

view.addEventListener('click', (ev) => {
  const t = ev.target;
  const seg = t.closest('.seg button');
  if (seg) {
    const id = seg.closest('.sym').dataset.sym;
    const v = Number(seg.dataset.v);
    updateEntry((e) => { if (v) e.symptoms[id] = v; else delete e.symptoms[id]; });
    seg.parentElement.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === seg)));
    toast('Salvo ✓');
    return;
  }
  const mood = t.closest('[data-mood]');
  if (mood) {
    const v = Number(mood.dataset.mood);
    const e = updateEntry((x) => { x.mood = x.mood === v ? 0 : v; });
    view.querySelectorAll('[data-mood]').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.mood) === e.mood)));
    toast('Salvo ✓');
    return;
  }
  const trig = t.closest('[data-trigger]');
  if (trig) {
    const id = trig.dataset.trigger;
    const e = updateEntry((x) => { x.triggers = x.triggers.includes(id) ? x.triggers.filter((i) => i !== id) : [...x.triggers, id]; });
    trig.setAttribute('aria-pressed', String(e.triggers.includes(id)));
    toast('Salvo ✓');
    return;
  }
  const period = t.closest('[data-period]');
  if (period) {
    const e = updateEntry((x) => { x.period = !x.period; });
    period.setAttribute('aria-pressed', String(e.period));
    toast('Salvo ✓');
    return;
  }
  if (t.closest('[data-goto-today]')) {
    state.tab = 'hoje';
    state.date = dateKey();
    render();
    return;
  }
  const open = t.closest('[data-open]');
  if (open) {
    state.date = open.dataset.open;
    state.tab = 'hoje';
    render();
    window.scrollTo(0, 0);
    return;
  }
  if (t.closest('[data-export-csv]')) return exportCSV();
  if (t.closest('[data-export-json]')) return download('menopausa-backup.json', 'application/json', JSON.stringify(loadAll(), null, 2));
  if (t.closest('[data-import-json]')) return $('#import-file').click();
  if (t.closest('[data-print]')) return window.print();
  if (t.closest('[data-clear]')) {
    if (confirm('Apagar TODOS os registros deste aparelho? Esta ação não pode ser desfeita. Considere exportar um backup antes.')) {
      saveAll({});
      render();
      toast('Dados apagados.');
    }
  }
});

view.addEventListener('keydown', (ev) => {
  const open = ev.target.closest && ev.target.closest('[data-open]');
  if (open && (ev.key === 'Enter' || ev.key === ' ')) {
    ev.preventDefault();
    open.click();
  }
});

view.addEventListener('input', (ev) => {
  if (ev.target.id === 'notes') {
    const v = ev.target.value;
    updateEntry((e) => { e.notes = v; });
  } else if (ev.target.id === 'sleep') {
    const v = ev.target.value.replace(',', '.');
    updateEntry((e) => { e.sleep = v === '' ? '' : String(Math.min(24, Math.max(0, Number(v) || 0))); });
  }
});

view.addEventListener('change', (ev) => {
  if (ev.target.id === 'date') {
    const v = ev.target.value;
    if (v && v <= dateKey()) { state.date = v; render(); }
    else ev.target.value = state.date;
  } else if (ev.target.id === 'import-file' && ev.target.files[0]) {
    importJSON(ev.target.files[0]);
  }
});

/* ------------------------------------------------------------------ *
 * Tamanho do texto (acessibilidade)
 * ------------------------------------------------------------------ */

const SIZES = ['', 'large', 'xlarge'];

function applySize(i) {
  const v = SIZES[i] || '';
  if (v) document.documentElement.dataset.size = v; else delete document.documentElement.dataset.size;
  try { localStorage.setItem('vcm.size', String(i)); } catch { /* sem armazenamento */ }
  return i;
}

let sizeIdx = 0;
try { sizeIdx = Number(localStorage.getItem('vcm.size')) || 0; } catch { /* ignora */ }
applySize(sizeIdx);

$('#text-size').addEventListener('click', () => {
  sizeIdx = applySize((sizeIdx + 1) % SIZES.length);
  toast(['Texto normal', 'Texto grande', 'Texto muito grande'][sizeIdx]);
});

/* ------------------------------------------------------------------ *
 * Início
 * ------------------------------------------------------------------ */

render();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

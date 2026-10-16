#!/usr/bin/env python3
"""Gera o documento de divulgação (HTML + PDF) com o QR code do app.

Uso:  python3 divulgacao/gerar.py https://endereco-do-app.com.br [saida_dir]
Requisitos: pip install segno  |  Chromium via Playwright (node) para o PDF.
"""
import io, subprocess, sys
from pathlib import Path
import segno

url = sys.argv[1].rstrip('/') + '/'
out = Path(sys.argv[2]) if len(sys.argv) > 2 else Path(__file__).parent
out.mkdir(parents=True, exist_ok=True)

buf = io.BytesIO()
segno.make(url, error='h').save(buf, kind='svg', scale=10, border=2, dark='#2e2230', xmldecl=False, svgns=True)
qr_svg = buf.getvalue().decode()
(out / 'qrcode.svg').write_text('<?xml version="1.0" encoding="utf-8"?>\n' + qr_svg)

html = f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8">
<title>Você no Controle da Menopausa – Divulgação</title>
<style>
  @page {{ size: A4; margin: 0; }}
  * {{ box-sizing: border-box; }}
  body {{ margin: 0; font: 16px/1.5 system-ui, "Segoe UI", Roboto, Arial, sans-serif; color: #2e2230; }}
  .page {{ width: 210mm; height: 297mm; padding: 16mm 18mm; page-break-after: always; position: relative; overflow: hidden; }}
  .page:last-child {{ page-break-after: auto; }}
  .brand {{ color: #b4476b; }}
  h1 {{ font-size: 34px; line-height: 1.15; margin: 0 0 6px; color: #b4476b; }}
  h1 small {{ display: block; font-size: 20px; color: #2e2230; font-weight: 600; margin-top: 6px; }}
  h2 {{ font-size: 22px; color: #b4476b; margin: 18px 0 8px; }}
  .band {{ background: #f7dfe7; border-radius: 18px; padding: 16px 20px; margin: 16px 0; }}
  .qr {{ display: flex; align-items: center; gap: 24px; }}
  .qr svg {{ width: 82mm; height: 82mm; flex: none; background: #fff; border-radius: 12px; }}
  .qr p {{ margin: 0 0 8px; }}
  .url {{ font-weight: 700; font-size: 20px; word-break: break-all; color: #b4476b; }}
  .steps {{ display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }}
  .box {{ border: 2px solid #ecdde2; border-radius: 14px; padding: 12px 16px; }}
  .box h3 {{ margin: 0 0 6px; font-size: 17px; }}
  ol, ul {{ margin: 4px 0 0; padding-left: 22px; }}
  li {{ margin-bottom: 3px; }}
  .notice {{ border: 2px solid #b4476b; border-radius: 14px; padding: 12px 16px; margin-top: 14px; }}
  .foot {{ position: absolute; left: 18mm; right: 18mm; bottom: 12mm; text-align: center; font-size: 13px; color: #7a6a7d; border-top: 1px solid #ecdde2; padding-top: 8px; }}
  .big {{ font-size: 19px; }}
  .p2 {{ font-size: 14.5px; line-height: 1.42; }}
  .tight {{ margin-top: 9px; padding: 9px 14px; }}
  .p2 h1 {{ margin-bottom: 4px; }}
</style></head><body>

<section class="page">
  <h1>Você no Controle da Menopausa<small>Sua agenda de sintomas, de graça, no seu celular.</small></h1>
  <p class="big">Registre como você se sente no dia a dia, perceba o que melhora ou piora seus sintomas e leve essas informações para a sua consulta.</p>

  <div class="band qr">
    {qr_svg}
    <div>
      <p><b>1. Aponte a câmera do celular</b> para o QR code ao lado.</p>
      <p><b>2. Abra o link</b> que aparecer na tela.</p>
      <p>Ou digite no navegador:</p>
      <p class="url">{url}</p>
      <p>Não precisa baixar na loja de aplicativos, não tem cadastro nem senha.</p>
    </div>
  </div>

  <h2>Deixe na tela inicial do celular</h2>
  <div class="steps">
    <div class="box"><h3>📱 Android (Chrome)</h3>
      <ol><li>Toque nos três pontinhos <b>⋮</b>.</li><li>Escolha <b>Instalar app</b> ou <b>Adicionar à tela inicial</b>.</li></ol></div>
    <div class="box"><h3>🍎 iPhone (Safari)</h3>
      <ol><li>Toque no botão <b>Compartilhar</b> (quadrado com seta).</li><li>Escolha <b>Adicionar à Tela de Início</b>.</li></ol></div>
  </div>

  <div class="notice">
    <b>Importante:</b> este é um <b>app de apoio</b>. Ele <b>não faz diagnóstico</b>, não indica remédios nem tratamentos e <b>não substitui</b> consulta com profissional de saúde. Em caso de dúvida, procure a Unidade Básica de Saúde (UBS) mais próxima ou o seu médico.
  </div>

  <div class="foot">Agenda de sintomas gratuita · Desenvolvido por <b>PeralIA Tech</b></div>
</section>

<section class="page p2">
  <h1>Como o app funciona</h1>

  <div class="box tight"><h3>📝 Hoje: o registro do dia (menos de 1 minuto)</h3>
    <ul>
      <li>Marque cada sintoma como <b>nenhum, leve, moderado ou forte</b>: fogachos, suor noturno, sono, ansiedade, humor, cansaço, dores e outros.</li>
      <li>Anote o humor, as horas de sono e o que aconteceu no dia (café, álcool, estresse, exercício) e se menstruou.</li>
      <li>Tudo é salvo automaticamente. Você pode preencher dias anteriores.</li></ul></div>

  <div class="box tight"><h3>📅 Histórico</h3>
    <ul><li>Veja e edite os dias já registrados.</li>
        <li>Exporte uma planilha (CSV) ou um backup para guardar.</li></ul></div>

  <div class="box tight"><h3>📈 Padrões</h3>
    <ul><li>Mostra como seus sintomas estão em relação à semana anterior e quais aparecem com mais frequência.</li>
        <li>Aponta relações observadas nos <i>seus</i> registros, como "dias de pouco sono tiveram sintomas mais fortes".</li>
        <li>Gera um resumo para <b>imprimir ou salvar em PDF</b> e levar à consulta.</li></ul></div>

  <div class="box tight"><h3>💡 Guia</h3>
    <ul><li>Dicas gerais de cuidado para cada sintoma e hábitos que ajudam no dia a dia.</li>
        <li>Sinais de alerta que pedem atendimento. Emergência: <b>SAMU 192</b>. Dúvidas de saúde: <b>Disque Saúde 136</b>.</li></ul></div>

  <div class="box tight"><h3>🔒 Privacidade</h3>
    <ul><li>Seus registros ficam <b>somente no seu celular</b>. Não há cadastro, nome, e-mail ou senha, e nada é enviado a ninguém.</li>
        <li>Se limpar os dados do navegador ou trocar de celular, os registros se perdem: faça o <b>Backup</b> na aba Histórico.</li>
        <li>Para ver melhor, use o botão <b>A+</b> no topo para aumentar o texto.</li></ul></div>

  <div class="notice">
    <b>App de apoio:</b> as informações são gerais e as análises são apenas observações dos seus próprios registros. Não são diagnóstico nem indicação de tratamento. Só um profissional de saúde pode avaliar o seu caso.
  </div>

  <div class="foot">Agenda de sintomas gratuita · Desenvolvido por <b>PeralIA Tech</b> · {url}</div>
</section>
</body></html>"""
(out / 'divulgacao.html').write_text(html, encoding='utf-8')

pdf_js = """
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });
  const p = await b.newPage();
  await p.goto('file://' + process.argv[2]);
  await p.pdf({ path: process.argv[3], format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await b.close();
})();
"""
js = out / '.pdf.js'
js.write_text(pdf_js)
try:
    subprocess.run(['node', str(js), str((out / 'divulgacao.html').resolve()), str((out / 'divulgacao.pdf').resolve())], check=True)
finally:
    js.unlink()
print('Gerado em', out)

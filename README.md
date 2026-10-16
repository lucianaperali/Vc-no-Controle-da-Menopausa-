# Vc-no-Controle-da-Menopausa-
App que ajuda você a entender e acompanhar a menopausa no dia a dia. Registre sintomas, identifique padrões e receba orientações claras para lidar melhor com as mudanças do seu corpo com mais equilíbrio, autonomia e tranquilidade.

## Como usar

App web (PWA) sem dependências e sem build. Para rodar localmente:

```bash
python3 -m http.server 8000   # e abra http://localhost:8000
```

Para publicar, basta hospedar os arquivos em qualquer hospedagem estática (GitHub Pages, Vercel, Netlify). No celular, use "Adicionar à tela inicial" para instalar.

## Funcionalidades

- **Hoje:** registro rápido de 14 sintomas (nenhum/leve/moderado/forte), humor, horas de sono, gatilhos do dia e menstruação.
- **Histórico:** lista dos registros, edição de dias anteriores, exportação em CSV e backup/restauração em JSON.
- **Padrões:** tendência semanal, sintomas mais frequentes, gráfico dos últimos 30 dias e relações com sono e hábitos, além de resumo para imprimir/PDF e levar à consulta.
- **Guia:** orientações por sintoma, hábitos gerais e sinais de alerta para procurar atendimento.

Os dados ficam somente no aparelho (`localStorage`); nada é enviado a servidores. O app oferece informações de apoio e não substitui consulta médica.

## Autoria e licença

Desenvolvido por **PeralIA Tech** e oferecido gratuitamente como agenda de sintomas para mulheres na menopausa. Licença MIT (veja `LICENSE`): o uso, a cópia e a distribuição são livres, desde que o aviso de autoria seja mantido.

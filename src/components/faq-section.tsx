"use client"

const faqs = [
  {
    id: "item-1",
    question: "O que são Perpetual Futures?",
    answer:
      "Perpetual Futures são contratos de derivativos que permitem aos traders negociar ativos com alavancagem. Diferente dos futuros tradicionais, eles não têm data de expiração e podem ser mantidos indefinidamente. Na XRPerp, você pode operar com alavancagem até 50x em XRP.",
  },
  {
    id: "item-2",
    question: "Como conectar minha carteira MetaMask?",
    answer:
      'Para conectar sua carteira MetaMask, clique no botão "Conectar MetaMask" no canto superior direito da página. Você será solicitado a aprovar a conexão em sua carteira. Certifique-se de que você está usando a rede XRP Ledger para máxima compatibilidade.',
  },
  {
    id: "item-3",
    question: "Quais são as taxas de trading?",
    answer:
      "As taxas de trading na XRPerp são competitivas e transparentes. Cobramos uma taxa de abertura e encerramento de posições, bem como uma taxa de financiamento que varia conforme a demanda do mercado. Não há taxas ocultas - tudo é claramente indicado antes de executar uma transação.",
  },
  {
    id: "item-4",
    question: "Como funciona a alavancagem?",
    answer:
      "A alavancagem permite que você controle uma posição maior com um capital menor. Na XRPerp, você pode escolher entre 1x até 50x de alavancagem. Com 10x de alavancagem, você controla 10 vezes mais do ativo com seu capital inicial. Lembre-se: maior alavancagem significa maior risco de liquidação.",
  },
  {
    id: "item-5",
    question: "É seguro tradear na XRP Ledger?",
    answer:
      "Sim, é seguro tradear na XRP Ledger. A rede XRP Ledger é uma das blockchains mais seguras e estabelecidas, com mecanismos de consenso robustos. Além disso, a XRPerp implementa as melhores práticas de segurança, incluindo auditorias de contrato inteligente e proteção contra gerenciamento de risco.",
  },
]

export default function FAQSection() {
  return (
    <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Perguntas Frequentes</h2>
          <p className="text-base sm:text-lg text-foreground">
            Encontre respostas para as perguntas mais comuns sobre trading de Perpetual Futures
          </p>
        </div>

        <div className="space-y-8 max-w-2xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="pb-8 last:pb-0">
              <h3 className="mb-4 text-xl font-semibold text-primary sm:text-2xl">{faq.question}</h3>
              <p className="text-base text-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

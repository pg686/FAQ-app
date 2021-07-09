import React from 'react'

function FAQ({faq, index, openFAQ}) {
    return (
        <div
          className={"faq " + (faq.open ? 'open' : '')}
          key={index}
          onClick={() => openFAQ(index)}
          >
              <div className="faq-question">
                  {faq.question}
              </div>
              <div className="faq-answer">
                  {faq.answer}
              </div>
            
        </div>
    )
}

export default FAQ

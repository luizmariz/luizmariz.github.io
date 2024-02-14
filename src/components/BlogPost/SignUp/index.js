import React from 'react';
import './style.css';

function SignUp() {
  return (
    <div style={{ margin: '4rem 0px 2rem' }}>
      <form
        action="https://app.convertkit.com/forms/1565471/subscriptions"
        className="seva-form formkit-form"
        method="post"
        min-width="400 500 600 700 800"
        style={{
          borderRadius: 6,
          boxShadow: 'var(--form-shadow)',
          transition: 'all 0.25s ease-out'
        }}
      >
        <div data-style="full">
          <div
            data-element="column"
            className="formkit-column"
            style={{
              backgroundColor: 'var(--footer)'
            }}
          >
            <div className="formkit-background" style={{ opacity: 0.3 }}></div>
            <div className="formkit-header" data-element="header">
              <h1
                style={{
                  color: 'rgb(var(--text))',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  lineHeight: '1.60rem'
                }}
              >
                Inscreva-se na Newsletter
              </h1>
            </div>
            <div
              className="formkit-subheader"
              data-element="subheader"
              style={{ color: 'rgb(var(--text))', fontSize: '.9rem' }}
            >
              <p>
                Eu demoro para postar rs. Então relaxa que não vou spammar{' '}
                <span role="img" aria-label="winking face">
                  😉
                </span>
              </p>
            </div>
            <div
              className="formkit-image formkit-image relative"
              role="button"
              aria-label="Subscribe to newsletter"
              tabindex="0"
            >
              <img
                src="https://embed.filekitcdn.com/e/jMvBwhj2iEdMTP9VKCSRyd/u2hVkSa4YDGLhsGwKT9Edb"
                alt=""
                style={{ maxWidth: '60%' }}
              />
            </div>
          </div>
          <div data-element="column" className="formkit-column">
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            ></ul>
            <div data-element="fields" className="seva-fields formkit-fields">
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  aria-label="Primeiro Nome"
                  name="fields[first_name]"
                  placeholder="Primeiro Nome"
                  type="text"
                  style={{
                    color: 'rgb(0, 0, 0)',
                    borderColor: 'rgb(227, 227, 227)',
                    borderRadius: 4,
                    fontWeight: 400
                  }}
                />
              </div>
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  name="email_address"
                  placeholder="Email"
                  required=""
                  type="email"
                  style={{
                    color: 'rgb(0, 0, 0)',
                    borderColor: 'rgb(227, 227, 227)',
                    borderRadius: 4,
                    fontWeight: 400
                  }}
                />
              </div>
              <button
                data-element="submit"
                className="formkit-submit formkit-submit"
                style={{
                  color: 'rgb(255, 255, 255)',
                  backgroundColor: 'rgb(75, 51, 76)',
                  borderRadius: 24,
                  fontWeight: 700
                }}
              >
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span>Inscreva-se</span>
              </button>
            </div>
            <div
              className="formkit-guarantee"
              data-element="guarantee"
              style={{
                color: 'var(--text)',
                fontSize: 13,
                fontWeight: 400
              }}
            >
              <p>Desinscreva-se quando quiser.</p>
            </div>
            <a
              href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
              className="formkit-powered-by"
              data-element="powered-by"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered By ConvertKit
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;

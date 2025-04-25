import React from 'react';

import { AnimatedText } from '../../utils/shared.styled';
import * as S from './styled';

function SignUpForm() {
  return (
    <S.Wrapper>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <S.StyledSectionSubTitle>
        Inscreva-se na minha
        <AnimatedText> newsletter</AnimatedText>
      </S.StyledSectionSubTitle>
      <S.SubTitle>
        Receba novidades direto no seu e-mail. Sem spam, só o bom e o útil! ✨
      </S.SubTitle>
      <form
        action="https://app.kit.com/forms/1565471/subscriptions"
        class="seva-form formkit-form"
        method="post"
        data-sv-form="1565471"
        data-uid="c9ccd99c04"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":"https://luizipsum.com.br/confirm"},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"hide","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
        data-dashlane-rid="e6047180a812b9c9"
        data-dashlane-classification="newsletter"
      >
        <div data-style="clean">
          <ul
            class="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          <div
            data-element="fields"
            data-stacked="false"
            class="seva-fields formkit-fields"
          >
            <div class="formkit-field">
              <input
                class="formkit-input"
                name="email_address"
                aria-label="📩 seu@email.com"
                placeholder="📩 seu@email.com"
                required=""
                type="email"
                data-dashlane-rid="748ee9ff88d86d1c"
                data-dashlane-classification="email"
                data-kwimpalastatus="alive"
                data-kwimpalaid="1745019948050-0"
              />
            </div>
            <button
              data-element="submit"
              class="formkit-submit formkit-submit"
              data-dashlane-label="true"
              data-dashlane-rid="1d5fe7dd76980183"
              data-dashlane-classification="action,subscribe"
            >
              <div class="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span class="">Inscreva-se</span>
            </button>
          </div>
          <div class="formkit-powered-by-convertkit-container">
            <a
              href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"
              data-element="powered-by"
              class="formkit-powered-by-convertkit"
              data-variant="light"
              target="_blank"
              rel="nofollow"
            >
              Powered by Kit
            </a>
          </div>
        </div>
      </form>
    </S.Wrapper>
  );
}

export default SignUpForm;

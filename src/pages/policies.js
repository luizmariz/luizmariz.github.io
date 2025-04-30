import React from 'react';
import Layout from '../components/Layout';

function Policies({ location }) {
  return (
    <Layout location={location}>
      <main>
        <h1>Política de Privacidade</h1>
        <em style={{ marginBottom: '2rem', display: 'block' }}>
          Última atualização: 27 de abril de 2025
        </em>
        <h2>1. Informações Coletadas</h2>
        <p>
          No site <strong>luizpsum.com.br</strong>, nós coletamos:
        </p>
        <ul>
          <li>
            <strong>Dados de inscrição</strong>: Se você se inscrever na
            newsletter, seu e-mail por exemplo;
          </li>
          <li>
            <strong>Dados de navegação</strong>: Informações anônimas como IP,
            tipo de navegador e páginas acessadas (via ferramentas como Google
            Analytics).
          </li>
        </ul>
        <p>
          Todas as informações pessoais serão tratadas em concordância com a Lei
          Nº 13.709, de 14 de Agosto de 2018.
        </p>
        <h2>2. Como Usamos Seus Dados</h2>
        <p>Seus dados são usados para:</p>
        <ul>
          <li>Enviar atualizações por e-mail (se inscrito);</li>
          <li>Melhorar a experiência no site.</li>
        </ul>
        <h2>3. Compartilhamento de Dados</h2>
        <p>
          <strong>Não compartilhamos</strong> seus dados pessoais com terceiros,
          exceto:
        </p>
        <ul>
          <li>
            Provedores de serviços essenciais (exemplo: plataforma de e-mail e
            marketing);
          </li>
          <li>Quando exigido por lei.</li>
        </ul>
        <h2>4. Cookies</h2>
        <p>
          Este site não utiliza cookies próprios, mas serviços de terceiros usam
          cookies para rastreamento. Se desejar bloquear esse rastreamento, você
          pode desativá-los no seu navegador.
        </p>
        <h2>5. Seus Direitos</h2>
        <p>Você pode:</p>
        <ul>
          <li>Cancelar sua inscrição a qualquer momento;</li>
          <li>Recusar cookies (via ajustes no navegador).</li>
        </ul>
        <p>
          O uso de <strong>luizipsum.com.br</strong> pressupõe a aceitação deste
          acordo de privacidade. O site reserva-se ao direito de alterar este
          acordo sem aviso prévio. Deste modo, recomendamos que consulte a a
          política de privacidade com regularidade de forma a estar sempre
          atualizado.
        </p>
        <p>
          Esta política se aplica apenas a <strong>luizpsum.com.br</strong>.
          Links para sites externos têm políticas próprias.
        </p>
      </main>
    </Layout>
  );
}

export default Policies;

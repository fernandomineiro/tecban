import React from 'react';
import { Alert } from 'reactstrap';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


export default function SSRPage({ user }) {
  return (
    <>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">Contas</h1>

          <Alert color="secondary">
            Nenhuma Conta Cadastrada.
          </Alert>

      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();

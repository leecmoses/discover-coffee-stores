import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps}></Component>
    </div>
  );
}

export default MyApp;

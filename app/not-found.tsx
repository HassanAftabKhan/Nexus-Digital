import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px", height: "600px",
            background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%)",
            filter: "blur(80px)", pointerEvents: "none",
          }}
        />
        <div className="container-site text-center" style={{ position: "relative", zIndex: 1 }}>
          <p
            className="font-black mb-6"
            style={{
              fontSize: "clamp(6rem, 15vw, 12rem)",
              color: "var(--color-surface-high)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            404
          </p>
          <h1 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", marginBottom: "1rem" }}>
            Page Not Found
          </h1>
          <p style={{ maxWidth: "420px", margin: "0 auto 2.5rem", fontSize: "1.05rem" }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/" variant="primary">
              Go Home
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

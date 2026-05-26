import { useEffect } from "react";

function PageEffects() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    if (!dot || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };

    const tickRing = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      animationFrameId = requestAnimationFrame(tickRing);
    };

    const handleMouseDown = () => {
      dot.style.width = "14px";
      dot.style.height = "14px";
      ring.style.width = "48px";
      ring.style.height = "48px";
    };

    const handleMouseUp = () => {
      dot.style.width = "6px";
      dot.style.height = "6px";
      ring.style.width = "32px";
      ring.style.height = "32px";
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        ring.style.width = "52px";
        ring.style.height = "52px";
        ring.style.borderColor = "rgba(122, 140, 255, 0.8)";
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        ring.style.width = "32px";
        ring.style.height = "32px";
        ring.style.borderColor = "rgba(122, 140, 255, 0.4)";
      }
    };

    const setupReveals = () => {
      const els = document.querySelectorAll("section > *, [data-reveal]");
      els.forEach((el) => el.classList.add("reveal"));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      els.forEach((el) => observer.observe(el));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    tickRing();

    const revealTimer = setTimeout(setupReveals, 400);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(revealTimer);
    };
  }, []);

  return null;
}

export default PageEffects;
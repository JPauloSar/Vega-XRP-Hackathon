"use client"

export default function FlareBackground() {
  return (
    <>
      <div className="flare-container">
        {/* Flare 1: Top left - Orange */}
        <div
          className="flare flare-orange"
          style={{
            left: "20%",
            top: "10%",
          }}
        />

        {/* Flare 2: Center right - Teal */}
        <div
          className="flare flare-teal"
          style={{
            right: "20%",
            top: "50%",
          }}
        />

        {/* Flare 3: Bottom center - Purple */}
        <div
          className="flare flare-purple"
          style={{
            left: "50%",
            bottom: "10%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Overlay for depth and contrast */}
      <div className="flare-overlay" />
    </>
  )
}

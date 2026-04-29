// needed by pm2 to run the frontend, backend, and localtunnel together

module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm",
      args: "run dev",
      cwd: "/home/madhur/chat_app/frontend",
    },
    {
      name: "backend",
      script: "npm",
      args: "run dev",
      cwd: "/home/madhur/chat_app/backend",
    },
    {
      name: "tunnel",
      script: "lt",
      args: "--port 5173 --subdomain chatty",
    },
  ],
};
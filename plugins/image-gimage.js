import { googleImage } from "@bochilteam/scraper";
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`;
  const res = await googleImage(text);
  let image = res.getRandom();
  let link = image;

  conn.sendButton(
    m.chat,
    "Nehhh Kak><",
    wm,
    link,
    [["NEXT", `.image ${text}`]],
    m
  );
};
handler.help = ["gimage <query>", "image <query>"];
handler.tags = ["internet"];
handler.command = /^(gimage|image)$/i;

export default handler;

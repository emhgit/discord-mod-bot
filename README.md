# Discord Mod Bot

This is a Discord moderation bot that has the functionality to kick, ban, respond to messages, and give roles.

## Demo

To be added...

## Tools Used

This project uses the following tools:
- Node.js
- Discord.js

## Usage

1. Running the Bot
    - Deploy the slash commands: 
        ```bash
            node commands.js
    - Start the bot:
        ```bash
            node index.js
2. Keep Bot Running
    - Local:
        ```bash
            npm install -g pm2
            pm2 start index.js --name "discord-bot"
    - Cloud:
        Use Render.com, Railway.app, or Replit (free options).
        Push code to GitHub, link to a cloud provider, and configure DISCORD_TOKEN as an environment variable.

## Third Party Libaries

This project uses the following library:
- Discord.js - https://github.com/discordjs/discord.js

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details
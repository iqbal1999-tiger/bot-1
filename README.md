# telegram-publications-downloader
Download scientific publications from Telegram

Original project is [auino/telegram-publications-downloader](https://github.com/auino/telegram-publications-downloader).

This program allows you to set up a Telegram bot to download PDF files of scientific academic research publications from HTML URLs passed as input.

### Program information ###

This program is written in bash scripting language.

The program is a fork of [topkecleon/telegram-bot-bash](https://github.com/topkecleon/telegram-bot-bash), making use of [dominictarr/JSON.sh](https://github.com/dominictarr/JSON.sh).

The bot is able to interpret only messages sent during the execution of the program.
If a message is sent while the program is not running, it is ignored by the bot, hence lost.

### Installation ###

 1. Create a new Telegram bot by contacting [@BotFather](http://telegram.me/botfather) and following [official Telegram instructions](https://core.telegram.org/bots#botfather)
 2. Clone the repository on your server:

    ```
    git clone https://github.com/auino/telegram-publications-downloader.git
    ```

 3. Enter the just created directory:

    ```
    cd telegram-publications-downloader
    ```

  4. Configure the bot token and access list (see [Configuration section](https://github.com/auino/telegram-publications-downloader#configuration) for more information)
 5. Run the bot:

    ```
     cd /home/runner/work/bot-1/bot-1
     TG_BOT_TOKEN="<your_bot_token>" TG_OPENBOT=0 bash publicationsbot.sh
     ```

### Configuration ###

First of all, if you're not familiar with it, consult [official Telegram Bot API](https://core.telegram.org/bots).

The `publicationsbot.sh` program supports configuration of the following parameters:
 * `TG_BOT_TOKEN` (or `TOKEN` in script) identifies the Telegram token of your bot
 * `TG_OPENBOT` (or `OPENBOT` in script) identifies if the bot is able to reply to anyone (`1`) or not (`0`, default and suggested feature, see [Disclaimer section](https://github.com/auino/telegram-publications-downloader#dislaimer))
 * `TG_ALLOWED_CHATIDS` (or `ALLOWED_CHATIDS_DEFAULT` in script) identifies the list of allowed clients for closed bots (ignored if `OPENBOT=1`), as comma-separated values, for instance `TG_ALLOWED_CHATIDS="01234,12345"`

Recommended setup for a closed bot:
1. Start the bot with `TG_OPENBOT=0`.
2. Send `/id` to your bot and copy your chat identifier.
3. Restart with your ID in `TG_ALLOWED_CHATIDS`, for example:

   ```
   cd /home/runner/work/bot-1/bot-1
   TG_BOT_TOKEN="<your_bot_token>" TG_OPENBOT=0 TG_ALLOWED_CHATIDS="<your_chat_id>" bash publicationsbot.sh
   ```

Verification:
 * Send `/start`
 * Send `/help`
 * Send `/get <html_url>`

### Supported services ###

Currently, supported services are the following ones:
 * [ScienceDirect](http://sciencedirect.com)
 * [IEEExplore](http://ieeexplore.ieee.org)

Note that in order to get resources, the program has to run on a host with access to the documents.

### Accepted commands ###

The bot accepts the following commands:
 * `/start`, used when a new chat is instantiated
 * `/help`, returning help information
 * `/id`, returning the chat identifier of the user sending the message
 * `/get <html_url>` to get the PDF file from a given HTML address (this is the only command applying the specified filters described in [Configuration section](https://github.com/auino/telegram-publications-downloader#configuration), if any)

### Available Bots ###

An [apposite wiki page](https://github.com/auino/telegram-publications-downloader/wiki/Available-Bots) enlisting all available bots is available.
[Contact me](https://github.com/auino/telegram-publications-downloader#contacts) to insert your bot into the wiki.

### Dislaimer ###

Using `OPENBOT=1` is not recommended, since it would make anyone able to access copyrighted content.
Instead, it is suggested to limit this access and make the bot able to reply to a specific (and very limited) number of users.
Also, terms of service of the involved services should be analyzed to evaluate the possibility to use the bot on that services.

I'm not responsible of any illecit use of the program, released for educational purposes.

### Contacts ###

You can find me on Twitter as [@auino](https://twitter.com/auino).

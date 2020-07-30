const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzM4MDc5NjQ5NTIzMDQwMjg3.XyGsPQ.yo8fCAVGLUWFJLg3PE2s1E5dTCc';

const PREFIX = 'caf!'

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('Sorry for disturbing, u can again go and do nothing!');
        break;
        case 'info':
            message.channel.send('Hey, This is Chess and Fun, Discord Server, formed by NoobSmasher10 and Soham Bhattacharyya . Pls read the following rules and comply.')
        break;
        case 'rules_count':
            message.channel.send('There are about 6 rules!')
        break;
        case 'rules':
            message.channel.send('1) Maintain a healthy environment. Pls dont trash talk or use swear words outside #😁fun-messages-and-memes.')
            message.channel.send('2) Dont post things that are not related to that channel. Pls find out the correct channel to post it.')
            message.channel.send('3) Here we expect you to have a chess.com account so as to play chess. Please create one if not already. Once created go to #verify-your-account-here and tell us your username or do aq!chesscomprofile [username] to show ur profile.')
            message.channel.send('4) Dont ask for any roles outside #roles.')
            message.channel.send('5) Pls use each and every channel for their intended purposes also dont spam.')
            message.channel.send('6) If u dont obey first time, warn, second temp mute for 1 hr third temp mute for 1 day and also kick if repreated again.')
            message.channel.send('P.S. Dont rob ppl in the dank memer game.')
        break;
        case 'help':
            const MessageEmbed = new Discord.MessageEmbed()
            .setColor('#5d18e5')
            .setTitle('Help Commands')
            .setDescription('caf!help_rules | caf!help_fun')
            .setFooter('More Commands coming soon?')
            message.channel.send(MessageEmbed)
        break;
        case 'help_rules':
            message.channel.send('Here they are- caf!rules | caf!info | caf!rules_count')
        break;
        case 'help_fun':
            message.channel.send('Here they are- caf!ping')
            break;
    }
})

bot.login(token);

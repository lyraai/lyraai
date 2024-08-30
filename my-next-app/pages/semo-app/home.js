"use client";

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    { text: "亲爱的朋友，欢迎来到Lyra。我知道失恋的痛苦不易承受，但你并不孤单。从今天起，我会陪着你一步步走出失恋。您现在最想聊哪个话题呢？", from: 'ai' }
  ]); // 存储聊天记录
  const [inputMessage, setInputMessage] = useState(''); // 存储输入框的内容

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = { text: inputMessage, from: 'user' };
      setMessages([...messages, newMessage]);
      setInputMessage(''); // 清空输入框
      // 此处可以触发发送消息给AI并接收回复的逻辑
    }
  };

  return (
    <>
      <Head>
        <title>与Semo聊天</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F3EE] p-4">
        {/* 顶部导航栏 */}
        <div className="bg-white w-full max-w-md p-2 flex items-center justify-between border-b border-gray-300">
          <button className="text-red-400">←</button>
          <h1 className="text-xl font-bold">与semo聊天</h1>
          <div className="w-6 h-6 bg-red-400 rounded-full"></div>
        </div>

        {/* 聊天消息区域 */}
        <div className="flex-1 w-full max-w-md bg-[#F9F3EE] p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`p-3 rounded-lg max-w-xs ${message.from === 'user' ? 'bg-[#FF7B76] text-white' : 'bg-white text-black'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* 底部输入框和按钮 */}
        <div className="w-full max-w-md p-2 bg-white flex flex-col">
          <div className="mb-2">
            <input 
              type="text" 
              className="w-full p-2 border rounded-full text-black bg-gray-100 placeholder-gray-500" 
              placeholder="你可以继续输入..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => { if (e.key === 'Enter') handleSendMessage(); }} 
            />
          </div>
          <div className="flex justify-between">
            {["分手的原因", "无法忘记前任", "想要复合的想法", "担忧未来关系"].map((quickReply, index) => (
              <button 
                key={index} 
                className="p-2 bg-[#FCE7DC] text-[#FF7B76] rounded-full text-sm"
                onClick={() => setInputMessage(quickReply)}
              >
                {quickReply}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

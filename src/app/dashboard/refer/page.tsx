'use client'

import { useState } from "react"
import {
  Copy,
  Check,
  ExternalLink,
  Gift,
  TrendingUp,
  Link2,
  Trophy,
  HelpCircle,
  BookOpen,
  DollarSign,
  Users,
  Zap,
  Pencil,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const REFERRAL_LINK = "refer.cal.com/lakshit-gupta-0zro22-cxdb"
const tabs = [
  { id: "quickstart", label: "Quickstart" },
  { id: "earnings", label: "Earnings" },
  { id: "links", label: "Links" },
  { id: "leaderboard", label: "Leaderboard" },
  { id: "faq", label: "FAQ" },
  { id: "resources", label: "Resources" },
]

export default function ReferPage() {
  const [activeTab, setActiveTab] = useState("quickstart")
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("https://" + REFERRAL_LINK)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="px-6 py-8 md:px-8">
      <div className="mb-8">
        <h1 className="font-cal text-[28px] text-neutral-100">Refer and earn</h1>
        <p className="mt-1 text-sm text-neutral-400">Earn 20% recurring commission for every person you refer to Cal.com.</p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6 lg:col-span-2">
          <h2 className="mb-4 text-sm font-semibold text-neutral-100">Referral link</h2>
          <div className="flex gap-3">
            <div className="flex flex-1 items-center rounded-lg border border-neutral-600 bg-neutral-900 px-3 py-2.5">
              <span className="truncate text-sm text-neutral-300">{REFERRAL_LINK}</span>
            </div>
            <button onClick={handleCopy} className="flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 transition-all hover:bg-white">
              {copied ? <><Check className="h-4 w-4" />Copied!</> : <><Copy className="h-4 w-4" />Copy link</>}
            </button>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-neutral-100">Rewards</h3>
              <a href="#" className="flex items-center gap-1 text-xs text-neutral-400 transition-colors hover:text-neutral-100">View terms <ExternalLink className="h-3 w-3" /></a>
            </div>
            <div className="space-y-3 rounded-lg border border-neutral-700 bg-neutral-900 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-700"><DollarSign className="h-3.5 w-3.5 text-neutral-300" /></div>
                <span className="text-sm text-neutral-200">20% per sale for <span className="font-semibold text-neutral-100">1 year</span></span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-700"><Gift className="h-3.5 w-3.5 text-neutral-300" /></div>
                <span className="text-sm text-neutral-200">New users get <span className="font-semibold text-neutral-100">20% off</span> for 12 months</span>
              </div>
              <div className="border-t border-neutral-700 pt-3">
                <p className="text-xs text-neutral-500"><span className="text-neutral-400">$10 minimum payout amount</span> • <span className="text-neutral-400">30-day holding period</span></p>
              </div>
            </div>
            <p className="mt-3 text-right text-xs text-neutral-600">Powered by <span className="font-semibold text-neutral-500">dub</span></p>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-neutral-100">Earnings</h3>
            <button className="rounded-lg border border-neutral-600 px-3 py-1.5 text-xs font-medium text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-neutral-100">Settings</button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-400">Upcoming</span>
              <span className="text-sm font-semibold text-neutral-100">$0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-400">Paid</span>
              <span className="text-sm font-semibold text-neutral-100">$0.00</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center rounded-lg bg-neutral-900 py-8">
            <Zap className="mb-2 h-6 w-6 text-neutral-600" />
            <p className="text-xs font-medium text-neutral-500">No activity yet</p>
            <p className="mt-1 text-center text-xs text-neutral-600">After your first click,<br />your stats will show</p>
          </div>
        </div>
      </div>

      <div className="mb-6 border-b border-neutral-700">
        <nav className="-mb-px flex gap-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={cn("relative whitespace-nowrap pb-3 text-sm font-medium transition-colors",
                activeTab === tab.id ? "text-neutral-100" : "text-neutral-500 hover:text-neutral-300"
              )}>
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="refer-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-100" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === "quickstart" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { icon: Link2, title: "Share your link", desc: "Sharing is caring! Recommend Cal.com to all your friends, family, and social followers.", action: "Copy link", onClick: handleCopy },
            { icon: BookOpen, title: "Success kit", desc: "Make sure you get setup for success with the official brand files and supportive content and documents.", action: "View resources", onClick: () => {} },
            { icon: DollarSign, title: "Receive earnings", desc: "After your payouts are connected, you'll get paid out automatically for all your sales.", action: "Connect payouts", onClick: () => {} },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-neutral-700 bg-neutral-800 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-700">
                <item.icon className="h-5 w-5 text-neutral-300" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-neutral-100">{item.title}</h3>
              <p className="mb-4 text-xs leading-relaxed text-neutral-400">{item.desc}</p>
              <button onClick={item.onClick} className="w-full rounded-lg border border-neutral-600 py-2 text-xs font-medium text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-neutral-100">
                {item.action}
              </button>
            </div>
          ))}
        </motion.div>
      )}

      {activeTab === "earnings" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
          className="flex flex-col items-center justify-center py-16 text-center">
          <TrendingUp className="mb-3 h-10 w-10 text-neutral-600" />
          <p className="text-sm font-medium text-neutral-400">No earnings yet</p>
          <p className="mt-1 text-xs text-neutral-600">Start sharing your referral link to earn commissions.</p>
        </motion.div>
      )}

      {activeTab === "links" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
          <div className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800">
            <div className="flex items-center justify-between border-b border-neutral-700 px-6 py-4">
              <h3 className="text-sm font-semibold text-neutral-100">Your links</h3>
              <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900 transition-colors hover:bg-white">
                <span className="text-lg font-medium leading-none">+</span>
              </button>
            </div>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-neutral-700 bg-neutral-900/50">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">Link</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">Clicks</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">Leads</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500">Sales</th>
                <th className="px-6 py-3"></th>
              </tr></thead>
              <tbody className="divide-y divide-neutral-700">
                {["refer.cal.com/lakshit-gupta-0zro22-cxdb", "refer.cal.com/lakshit-gupta-0zro22-ofyl"].map((link, i) => (
                  <tr key={i} className="transition-colors hover:bg-neutral-900/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-600 transition-colors hover:bg-neutral-700">
                          <Copy className="h-3.5 w-3.5 text-neutral-400" />
                        </button>
                        <div>
                          <p className="text-sm text-neutral-200">{link}</p>
                          <p className="text-xs text-neutral-500">to cal.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-neutral-400">0</td>
                    <td className="px-6 py-4 text-neutral-400">0</td>
                    <td className="px-6 py-4 text-neutral-400">$0.00</td>
                    <td className="px-6 py-4">
                      <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-600 transition-colors hover:bg-neutral-700">
                        <Pencil className="h-3.5 w-3.5 text-neutral-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {activeTab === "leaderboard" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
          className="flex flex-col items-center justify-center py-16 text-center">
          <Trophy className="mb-3 h-10 w-10 text-neutral-600" />
          <p className="text-sm font-medium text-neutral-400">Leaderboard coming soon</p>
          <p className="mt-1 text-xs text-neutral-600">Top referrers will be shown here.</p>
        </motion.div>
      )}

      {activeTab === "faq" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
          className="max-w-2xl space-y-3">
          {[
            { q: "How does the referral program work?", a: "Share your unique referral link. When someone signs up and pays for Cal.com using your link, you earn 20% of their payment for 1 year." },
            { q: "When do I get paid?", a: "Payouts are processed automatically once you connect your payout method. There's a $10 minimum payout amount and a 30-day holding period." },
            { q: "Who can join the referral program?", a: "Any Cal.com user can join the referral program for free. Just share your link and start earning." },
            { q: "How long does the commission last?", a: "You earn 20% recurring commission for 1 year from the date of each referred user's first payment." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-neutral-700 bg-neutral-800 p-5">
              <div className="flex items-start gap-3">
                <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                <div>
                  <p className="mb-1.5 text-sm font-semibold text-neutral-100">{item.q}</p>
                  <p className="text-sm leading-relaxed text-neutral-400">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {activeTab === "resources" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
          className="grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { icon: BookOpen, title: "Brand kit", desc: "Official logos, colors, and assets to help you promote Cal.com." },
            { icon: Users, title: "Community", desc: "Join the Cal.com community to connect with other referral partners." },
            { icon: TrendingUp, title: "Success stories", desc: "Read how other partners are earning with Cal.com referrals." },
            { icon: ExternalLink, title: "Affiliate docs", desc: "Full documentation on the referral program terms and conditions." },
          ].map((item, i) => (
            <div key={i} className="flex cursor-pointer items-start gap-4 rounded-xl border border-neutral-700 bg-neutral-800 p-5 transition-colors hover:border-neutral-600">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-700">
                <item.icon className="h-[18px] w-[18px] text-neutral-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-100">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

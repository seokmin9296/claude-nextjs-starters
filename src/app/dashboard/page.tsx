'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const [stats] = useState([
    { title: '총 사용자', value: '1,234', change: '+12%' },
    { title: '활성 세션', value: '456', change: '+5%' },
    { title: '총 매출', value: '$12,500', change: '+18%' },
    { title: '전환율', value: '3.24%', change: '+0.5%' },
  ])

  const [recentActivity] = useState([
    { id: 1, action: '새로운 사용자 등록', time: '2분 전' },
    { id: 2, action: '구매 완료', time: '15분 전' },
    { id: 3, action: '프로필 업데이트', time: '1시간 전' },
    { id: 4, action: '로그인', time: '2시간 전' },
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">대시보드</h1>
        <p className="text-slate-600">시스템 통계 및 활동 현황을 확인하세요</p>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <p className="text-sm text-slate-600 mb-2">{stat.title}</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <span className="text-sm text-green-600 font-medium">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 최근 활동 */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">최근 활동</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                <p className="text-sm text-slate-700">{activity.action}</p>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 빠른 작업 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">빠른 작업</h2>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              📊 보고서 생성
            </Button>
            <Button variant="outline" className="w-full justify-start">
              👥 사용자 관리
            </Button>
            <Button variant="outline" className="w-full justify-start">
              ⚙️ 설정
            </Button>
            <Button variant="outline" className="w-full justify-start">
              📧 알림 보내기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

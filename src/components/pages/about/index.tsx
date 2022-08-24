import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';

export const About = () => (
  <MainLayout
    className="lg:block mt-n30"
    main={
      <>
        <Profile />
        <div className="school p-4 lg:p-10 bg-primary-1">
          <h2 className="text-2xl font-bold text-primary-1 mb-6">School</h2>
          <div className="tree_container">
            <div className="timeline-item" date-is="2018">
              <h1>滋賀短期大学附属高校</h1>
              <p>普通科二類理系</p>
            </div>

            <div className="timeline-item" date-is="2021">
              <h1>立命館大学</h1>
              <p>
                情報理工学部
                <br />
                セキュリティ・ネットワークコース
                <br />
                <br />
                情報理工学部プロジェクト団体Ri-one
                <br />
                --- 団員 (Small Size League)
                <br />
              </p>
            </div>
            <div className="timeline-item" date-is="2022">
              情報理工学部プロジェクト団体RiST
              <br />
              --- 団体長
              <br />
              <br />
              立命館守山高校課題研究アドバイザー
            </div>
            <div className="timeline-item" date-is="2023"></div>
          </div>

          <h2 className="text-2xl font-bold text-primary-1 mb-6 mt-6">Event</h2>
          <div className="tree_container">
            <div className="timeline-item" date-is="2022"></div>
            <div className="timeline-item" date-is="2022-8">
              <p>
                立命館大学オープンキャンパス・サマースクール
                <br /> 「実践ハッキング入門」
              </p>
            </div>
            <div className="timeline-item" date-is="2022-9">
              <p>
                KC3 「OWASP ZAP を使った脆弱性診断で Webセキュリティを学ぼう！」
              </p>
            </div>
          </div>
        </div>
      </>
    }
  />
);
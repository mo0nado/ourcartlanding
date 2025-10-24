import { Apple, Smartphone, Download, ShoppingCart, Sparkles, Users, Bell } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen max-w-6xl mx-auto">
          <div className="flex items-center gap-5 mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-50"></div>
              <img
                src="/icon.png"
                alt="سلتنا"
                className="w-24 h-24 rounded-3xl shadow-2xl relative z-10 border border-white/10"
              />
            </div>
            <div>
              <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent">
                سلتنا
              </h1>
              <p className="text-emerald-400 text-xl font-medium mt-1">Our Cart</p>
            </div>
          </div>

          <p className="text-xl text-slate-300 mb-16 text-center max-w-2xl leading-relaxed">
            تسوق بذكاء، وفر أكثر! تطبيقك المثالي لإدارة مشترياتك وقوائم التسوق بسهولة وفعالية
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-20 w-full max-w-4xl">
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
                  <ShoppingCart className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">قوائم ذكية</h3>
                <p className="text-slate-400 leading-relaxed">نظم مشترياتك بقوائم متعددة وشاركها مع العائلة بسهولة تامة</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/20">
                  <Sparkles className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">تجربة سلسة</h3>
                <p className="text-slate-400 leading-relaxed">واجهة عصرية بسيطة تجعل التسوق متعة حقيقية</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  <Users className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">مشاركة جماعية</h3>
                <p className="text-slate-400 leading-relaxed">تسوق مع عائلتك وأصدقائك في الوقت الفعلي</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 mb-10">
            <a
              href="#"
              className="group relative bg-white text-black px-10 py-5 rounded-2xl flex items-center gap-4 hover:bg-slate-50 transition-all shadow-2xl shadow-white/10 hover:shadow-white/20 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <Apple className="w-8 h-8 relative z-10" />
              <div className="text-left relative z-10">
                <div className="text-xs opacity-70 font-medium">Download on the</div>
                <div className="text-2xl font-bold">App Store</div>
              </div>
            </a>

            <a
              href="#"
              className="group relative bg-white text-black px-10 py-5 rounded-2xl flex items-center gap-4 hover:bg-slate-50 transition-all shadow-2xl shadow-white/10 hover:shadow-white/20 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <svg className="w-8 h-8 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.09-.936V2.75a.995.995 0 0 1 .09-.936zM14.5 12.707l3.432 3.432-11.043 6.359L14.5 12.707zM18.641 10.443l-3.641 2.12-4.121-4.121 4.121-4.122 3.641 2.12a1 1 0 0 1 0 2.003zm-11.552-7.9l11.044 6.36-3.433 3.432-7.611-7.611z"/>
              </svg>
              <div className="text-left relative z-10">
                <div className="text-xs opacity-70 font-medium">GET IT ON</div>
                <div className="text-2xl font-bold">Google Play</div>
              </div>
            </a>
          </div>

          <a
            href="https://download1326.mediafire.com/2et8xmqh6stgKEaShRrQdAHFs-4i0LNEjaFx297eQ95HgR5cDgln-Y_v0OLA7Aon8kaoL1_o3ETprMrPorzbHrodSP9IeDCJL04yLV1471ALSJ7rOEf3Kwa0R59fsIJnk_nTvgCFqeCweMbDPI0lRz1JZE7nynVl1TG3WDIwAPsSUvbK/xsx8k9dd6e47jmk/application-cc1ddeee-dc82-4aff-a594-358ced6f3fe2.apk"
            className="group text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-2 transition-all text-lg"
          >
            <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" strokeWidth={2.5} />
            تحميل APK مباشرة
          </a>

          <footer className="mt-24 text-center text-slate-500 text-sm">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto mb-6"></div>
            <p>© 2025 سلتنا. جميع الحقوق محفوظة</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

import {useState} from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  Coins,
  FileCheck2,
  FileText,
  House,
  LandPlot,
  LockKeyhole,
  Menu,
  Mountain,
  RotateCw,
  MessageCircle,
  ShieldCheck,
  ShoppingCart,
  Wallet,
  X,
  Building2,
  BadgeDollarSign,
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import hero from '@/assets/batumi-hero.jpg';
import coast from '@/assets/georgia-coast.jpg';
import villa from '@/assets/batumi-villa.jpg';
import land from '@/assets/batumi-land.jpg';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const money = (amount: number) =>
  '$ ' + Math.round(amount).toLocaleString('ru-RU');
const nav = [
  {label: 'О нас', href: '#about'},
  {label: 'Как это работает', href: '#how'},
  {label: 'Кейсы', href: '#cases'},
  {label: 'Калькулятор', href: '#calculator'},
  {label: 'FAQ', href: '#faq'},
  {label: 'Контакты', href: '#contacts'},
];
const properties = [
  {
    title: 'Дом в Батуми, 250 кв.м',
    image: villa,
    market: 225000,
    investment: 50000,
    buyback: 59000,
    rate: 36,
    totalRate: 36,
    earned: 9000,
    received: 59000,
    actual: 'Выкуп произошёл через 2 месяца',
    period: 'за 2 месяца',
  },
  {
    title: 'Земельный участок, Батуми',
    image: land,
    market: 110000,
    investment: 30000,
    buyback: 34950,
    rate: 33,
    totalRate: 33,
    earned: 9900,
    received: 39900,
    actual: 'Была пролонгация до 12 мес.',
    period: 'за 12 месяцев',
  },
];

function Index() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modal, setModal] = useState<'objects' | 'telegram' | null>(null);
  const [amount, setAmount] = useState('50000');
  const [calculatedAmount, setCalculatedAmount] = useState(50000);
  const [error, setError] = useState('');
  const calculate = (event: React.FormEvent) => {
    event.preventDefault();
    const value = Number(amount.replace(/\s/g, ''));
    if (!Number.isFinite(value) || value < 5000 || value > 1500000) {
      setError('Введите сумму от $5 000 до $1 500 000');
      return;
    }
    setError('');
    setCalculatedAmount(value);
  };
  const openObjects = () => setModal('objects');

  return (
    <main>
      <section className='hero' id='about'>
        <img
          className='hero-image'
          src={hero}
          alt='Панорама Батуми и Чёрного моря с террасы'
          width={1920}
          height={1024}
        />
        <div className='hero-shade' />
        <header className='header wrap'>
          <a href='#' className='brand' aria-label='Reskript — главная'>
            <svg
              className='mark'
              viewBox='0 0 100 110'
              fill='none'
              stroke='currentColor'
              strokeWidth='3.4'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <circle cx='50' cy='14' r='4' fill='currentColor' stroke='none' />
              <line x1='50' y1='18' x2='50' y2='86' />
              <line x1='16' y1='30' x2='84' y2='30' />
              <line x1='16' y1='30' x2='8' y2='52' />
              <line x1='16' y1='30' x2='24' y2='52' />
              <path d='M5 52 Q16 67 27 52' />
              <line x1='84' y1='30' x2='76' y2='52' />
              <line x1='84' y1='30' x2='92' y2='52' />
              <path d='M73 52 Q84 67 95 52' />
              <path d='M38 86 Q50 80 62 86' />
              <line x1='33' y1='92' x2='67' y2='92' />
            </svg>
            <span>Reskript</span>
          </a>
          <nav className='desktop-nav' aria-label='Основная навигация'>
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Button className='gold-button header-cta' onClick={openObjects}>
            Связаться
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='menu-toggle'
            aria-label={mobileMenu ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X /> : <Menu />}
          </Button>
        </header>
        {mobileMenu && (
          <nav className='mobile-nav' aria-label='Мобильная навигация'>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenu(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
        <div className='hero-content wrap'>
          <p className='eyebrow'>ИНВЕСТИЦИИ В НЕДВИЖИМОСТЬ ГРУЗИИ</p>
          <h1>
            <span className='headline-intro'>НЕДВИЖИМОСТЬ С</span>
            <span className='gold-text'>
              ОБРАТНЫМ
              <br />
              ВЫКУПОМ
            </span>
          </h1>
          <div className='hero-numbers'>
            <div>
              <span className='yield-label'>Фиксированная доходность</span>
              <strong>25-36%</strong>
              <span className='yield-caption'>И БОЛЕЕ В USD</span>
            </div>
            <div className='hero-date'>
              <CalendarDays />
            </div>
          </div>
          <Button
            className='gold-button main-cta'
            size='lg'
            onClick={openObjects}
          >
            Получить доступ к объектам <ArrowRight />
          </Button>
        </div>
        <div className='hero-features'>
          <div className='wrap features-grid'>
            <div className='hero-feature'>
              <span className='round-icon'>
                <ChartNoAxesCombined />
              </span>
              <p>
                Вход от<strong>$5 000</strong>
              </p>
            </div>
            <div className='hero-feature'>
              <span className='round-icon'>
                <ShieldCheck />
              </span>
              <p>
                <b>Полностью легально,</b>
                <br />
                через юстицию
              </p>
            </div>
            <div className='hero-feature'>
              <span className='round-icon'>
                <Coins />
              </span>
              <p>
                <b>В 2–4 раза больше</b>
                <br />
                инвестиций
              </p>
            </div>
            <div className='hero-feature'>
              <span className='round-icon percent-icon'>%</span>
              <p>
                Доходность<strong>25–36%+</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='how-section' id='how'>
        <div className='wrap'>
          <div className='section-heading'>
            <h2>КАК ЭТО РАБОТАЕТ?</h2>
            <p>Простая и понятная схема для инвестора</p>
          </div>
          <div className='steps-grid'>
            <div className='process-step'>
              <span className='step-number'>1</span>
              <div className='step-content'>
                <ShoppingCart />
                <h3>ПОКУПКА</h3>
                <p>
                  Инвестор покупает недвижимость
                  <br />
                  за 25–30–40% от рыночной цены.
                </p>
              </div>
              <ChevronRight className='step-arrow' />
            </div>
            <div className='process-step'>
              <span className='step-number'>2</span>
              <div className='step-content'>
                <FileText />
                <h3>РЕГИСТРАЦИЯ</h3>
                <p>
                  Право собственности оформляется
                  <br />в юстиции Грузии (2 часа).
                </p>
              </div>
              <ChevronRight className='step-arrow' />
            </div>
            <div className='process-step'>
              <span className='step-number'>3</span>
              <div className='step-content'>
                <RotateCw />
                <h3>ВЫКУП</h3>
                <p>
                  Продавец выкупает недвижимость
                  <br />в течение 6–12 месяцев с доходностью 25–36%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='benefits-section'>
        <img
          src={coast}
          loading='lazy'
          width={1536}
          height={768}
          alt='Побережье Грузии и грузинские флаги'
        />
        <div className='benefits-shade' />
        <div className='wrap benefits-content'>
          <h2>
            ПОЧЕМУ ЭТО ИНТЕРЕСНО
            <br />
            ИНВЕСТОРУ?
          </h2>
          <div className='benefits-grid'>
            <div>
              <BadgeDollarSign />
              <p>
                Вход от<strong>$5 000</strong>
              </p>
            </div>
            <div>
              <House />
              <p>
                Объект
                <br />
                оформляется
                <br />
                на инвестора
              </p>
            </div>
            <div>
              <ChartNoAxesCombined />
              <p>
                Стоимость
                <br />
                недвижимости
                <br />в 2–4 раза выше
                <br />
                вложений
              </p>
            </div>
            <div>
              <ShieldCheck />
              <p>
                Полностью
                <br />
                легально,
                <br />
                через юстицию
                <br />
                Грузии
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='cases-section' id='cases'>
        <div className='wrap'>
          <div className='cases-heading'>
            <h2>ПОСЛЕДНИЕ КЕЙСЫ</h2>
            <span>Батуми, Грузия</span>
          </div>
          <div className='cases-grid'>
            {properties.map((property, index) => (
              <article className='property-card' key={property.title}>
                <div className='property-photo'>
                  <img
                    src={property.image}
                    alt={property.title}
                    loading='lazy'
                    width={1024}
                    height={1024}
                  />
                  <span className='case-number'>#{index + 1}</span>
                  <div className='return-badge'>
                    <span>ИТОГО:</span>
                    <strong>{property.totalRate}%</strong>
                    <span>ГОДОВЫХ</span>
                  </div>
                </div>
                <div className='property-content'>
                  <h3>{property.title}</h3>
                  <dl>
                    <div>
                      <dt>Рыночная стоимость:</dt>
                      <dd>{money(property.market)}</dd>
                    </div>
                    <div>
                      <dt>Инвестиции:</dt>
                      <dd>{money(property.investment)}</dd>
                    </div>
                    <div>
                      <dt>Срок договора:</dt>
                      <dd>6 месяцев</dd>
                    </div>
                    <div>
                      <dt>Планируемый выкуп:</dt>
                      <dd>
                        {money(property.buyback)}
                        <small>({property.rate}% годовых)</small>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className='transaction'>
                  <span className='transaction-title'>ПАРАМЕТРЫ СДЕЛКИ:</span>
                  <div className='transaction-grid'>
                    <p>{property.actual}</p>
                    <p>
                      Получено:<strong>{money(property.received)}</strong>
                    </p>
                    <p>
                      Прибыль:<strong>{money(property.earned)}</strong>
                      <small>{property.period}</small>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='calculator-section' id='calculator'>
        <img
          src={land}
          loading='lazy'
          width={1024}
          height={1024}
          alt='Морское побережье Батуми'
        />
        <div className='calculator-shade' />
        <div className='wrap calculator-layout'>
          <div className='calculator-heading'>
            <CalendarDays />
            <div>
              <h2>КАЛЬКУЛЯТОР ДОХОДНОСТИ</h2>
              <p>Узнайте, сколько можете заработать</p>
            </div>
          </div>
          <form onSubmit={calculate} className='calculator-form'>
            <label htmlFor='investment'>Сумма инвестиций</label>
            <div className='calculator-input-row'>
              <div className='amount-input'>
                <span>$</span>
                <input
                  id='investment'
                  inputMode='numeric'
                  type='text'
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  aria-describedby={error ? 'amount-error' : undefined}
                />
              </div>
              <Button type='submit' className='gold-button'>
                Рассчитать <ArrowRight />
              </Button>
            </div>
            {error && (
              <p id='amount-error' className='amount-error' role='alert'>
                {error}
              </p>
            )}
          </form>
          <div className='calculator-result' aria-live='polite'>
            <h3>ПРИМЕР РЕЗУЛЬТАТА:</h3>
            <div>
              <span>6 мес.</span>
              <strong>+{money(calculatedAmount * 0.18)}</strong>
              <small>(18%)</small>
            </div>
            <div>
              <span>12 мес.</span>
              <strong>+{money(calculatedAmount * 0.36)}</strong>
              <small>(36%)</small>
            </div>
            <div>
              <span>Досрочно (3 мес.)</span>
              <strong>+{money(calculatedAmount * 0.18)}</strong>
              <small>(72%)</small>
            </div>
            <p>
              Иллюстративный расчёт. Проценты — годовые,
              <br />
              не гарантия доходности.
            </p>
          </div>
        </div>
      </section>

      <section className='details-section' id='faq'>
        <div className='wrap details-grid'>
          <div className='guarantee-panel'>
            <div className='panel-shade' />
            <LockKeyhole className='lock-illustration' />
            <div className='guarantee-copy'>
              <h2>
                ЧТО, ЕСЛИ ПРОДАВЕЦ
                <br />
                НЕ ВЫКУПИТ ОБЪЕКТ?
              </h2>
              <ul>
                <li>
                  <Check />
                  Снятие обременения (1–4 дня)
                </li>
                <li>
                  <Check />У инвестора остаётся недвижимость в 3–4 раза больше
                  вложений
                </li>
                <li>
                  <Check />
                  Сдаём в аренду или продаём с прибылью (200–300%)
                </li>
              </ul>
            </div>
          </div>
          <div className='investor-panel'>
            <img
              src={coast}
              alt='Вид на Батуми с побережья'
              loading='lazy'
              width={1536}
              height={768}
            />
            <div className='panel-shade' />
            <div className='investor-copy'>
              <h2>
                КАК СТАТЬ ИНВЕСТОРОМ
                <br />— 5 ШАГОВ
              </h2>
              <ol>
                {[
                  'Выбираете объект',
                  'Юридическая проверка',
                  'Подписание договора купли-продажи',
                  'Оформление в юстиции Грузии (2 часа)',
                  'Получение прибыли (через 3–12 месяцев)',
                ].map((text, i) => (
                  <li key={text}>
                    <span>{i + 1}</span>
                    {text}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className='available-panel'>
            <h3>Доступные объекты</h3>
            <ul>
              <li>
                <Building2 />
                Квартиры и апартаменты
              </li>
              <li>
                <House />
                Коммерческие помещения
              </li>
              <li>
                <FileCheck2 />
                Строящиеся объекты
              </li>
              <li>
                <LandPlot />
                Земельные участки
              </li>
            </ul>
            <p>
              <b>Сумма:</b> от $5 000 до $1 500 000
            </p>
            <p>
              <b>География:</b> Тбилиси, Батуми, Кутаиси,
              <br />
              Гудаури и пригороды
            </p>
            <Button variant='link' onClick={openObjects}>
              Запросить объекты <ArrowUpRight />
            </Button>
          </div>
        </div>
      </section>

      <footer className='footer' id='contacts'>
        <div className='wrap footer-main'>
          <div className='telegram-copy'>
            <span className='telegram-icon'>
              <MessageCircle />
            </span>
            <p>
              О нас:
              <br />
              Работаем и с 2012 г. Юридическое и информационное сопровождение
              инвестиций в грузинскую недвижимость. Открытие банковских счетов
              <br />
              <b>Помогаем получить ВНЖ.</b>
            </p>
          </div>
          <Button
            className='gold-button telegram-button'
            onClick={() => setModal('telegram')}
          >
            Связаться <ArrowRight />
          </Button>
          <div className='bonus'>
            <BadgeDollarSign />
            <p>
              Бонус: при заключении договора до 25.12.2026
              <br />
              юридическое
              <br />
              сопровождение бесплатно
            </p>
          </div>
        </div>
        <div className='wrap footer-bottom'>
          <span>© Reskript</span>
          <span>Информация из макета. Условия и риски требуют проверки.</span>
        </div>
      </footer>

      <Dialog
        open={modal !== null}
        onOpenChange={(open) => {
          if (!open) setModal(null);
        }}
      >
        <DialogContent className='object-dialog'>
          <DialogHeader>
            <DialogTitle>
              {modal === 'objects'
                ? 'Объекты Reskript'
                : 'Закрытый Telegram-канал'}
            </DialogTitle>
            <DialogDescription>
              {modal === 'objects'
                ? 'Объекты и условия, представленные в макете.'
                : 'Ссылка на канал пока не добавлена.'}
            </DialogDescription>
          </DialogHeader>
          {modal === 'objects' ? (
            <>
              <div className='modal-properties'>
                {properties.map((property) => (
                  <article key={property.title}>
                    <img
                      src={property.image}
                      alt={property.title}
                      width={1024}
                      height={1024}
                    />
                    <h3>{property.title}</h3>
                    <p>
                      Инвестиции <strong>{money(property.investment)}</strong>
                    </p>
                    <p>
                      Срок договора <strong>6 месяцев</strong>
                    </p>
                  </article>
                ))}
              </div>
              <p className='modal-note'>
                Для получения актуального списка объектов нужен контакт
                представителяReskript.
              </p>
              <Button
                className='gold-button'
                onClick={() => setModal('telegram')}
              >
                <MessageCircle /> Связаться
              </Button>
            </>
          ) : (
            <div className='telegram-dialog'>
              <MessageCircle />
              <p>
                Контакт представителя Reskript появится здесь после добавления
                официальной ссылки на канал.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
export default Index;

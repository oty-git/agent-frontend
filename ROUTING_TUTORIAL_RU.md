# Пошаговый туториал: Система маршрутизации React с Feature-Sliced Design

## 📋 Содержание

1. [Введение в FSD](#введение-в-fsd)
2. [Подготовка проекта](#подготовка-проекта)
3. [Структура FSD](#структура-fsd)
4. [Shared слой](#shared-слой)
5. [Entities слой](#entities-слой)
6. [Features слой](#features-слой)
7. [Pages слой](#pages-слой)
8. [App слой](#app-слой)
9. [Интеграция и тестирование](#интеграция-и-тестирование)

---

## 🏗️ Введение в FSD

**Feature-Sliced Design** - это архитектурная методология для фронтенд-проектов, которая организует код по слоям и сегментам.

### Основные принципы:

- **Явная структура** - четкое разделение по слоям
- **Контролируемые зависимости** - импорты только "вниз" по слоям
- **Переиспользование** - общий код в shared слое
- **Изоляция фич** - каждая фича независима

### Слои FSD:

1. **app** - инициализация приложения, провайдеры, роутинг
2. **pages** - страницы приложения
3. **features** - бизнес-фичи пользователя
4. **entities** - бизнес-сущности
5. **shared** - переиспользуемые ресурсы
6. **widgets** - композитные блоки (опционально)

---

## 🚀 Подготовка проекта

### Шаг 1: Создание проекта

```bash
# Создаем новый проект
npx create-react-app football-trials-marketplace --template typescript
cd football-trials-marketplace

# Очищаем ненужные файлы
rm src/App.css src/App.test.tsx src/logo.svg src/reportWebVitals.ts src/setupTests.ts

# Установка зависимостей
npm install react-router-dom @reduxjs/toolkit react-redux redux-persist
npm install react-icons classnames
npm install --save-dev @types/react-router-dom
```

### Шаг 2: Структура FSD

```
src/
├── app/                    # Инициализация приложения
│   ├── providers/
│   ├── store/
│   └── styles/
├── pages/                  # Страницы
│   ├── home/
│   ├── trials/
│   ├── profile/
│   └── auth/
├── features/               # Бизнес-фичи
│   ├── auth/
│   ├── trial-search/
│   ├── trial-booking/
│   └── profile-edit/
├── entities/               # Бизнес-сущности
│   ├── user/
│   ├── trial/
│   ├── club/
│   └── session/
├── shared/                 # Общие ресурсы
│   ├── api/
│   ├── config/
│   ├── lib/
│   └── ui/
└── widgets/                # Композитные блоки
    ├── header/
    ├── sidebar/
    └── footer/
```

---

## 📁 Shared слой

### Шаг 3: Создание базовых типов

Создайте `src/shared/types/route.ts`:

```typescript
import { ComponentType, LazyExoticComponent } from 'react';

export interface RouteConfig {
  key: string;
  path: string;
  component: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  authority?: string[];
  meta?: {
    layout?: string;
    requiresAuth?: boolean;
    title?: string;
  };
}

export type Routes = RouteConfig[];
```

Создайте `src/shared/types/navigation.ts`:

```typescript
import { ReactNode } from 'react';

export interface NavigationItem {
  key: string;
  path?: string;
  title: string;
  icon?: ReactNode;
  type: 'item' | 'collapse' | 'title';
  authority?: string[];
  subMenu: NavigationItem[];
}

export type NavigationTree = NavigationItem[];
```

### Шаг 4: Конфигурация маршрутов

Создайте `src/shared/config/routes.ts`:

```typescript
// Базовые пути
export const ROUTES = {
  // Публичные маршруты
  HOME: '/',
  TRIALS: '/trials',
  CLUBS: '/clubs',
  ABOUT: '/about',

  // Аутентификация
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  FORGOT_PASSWORD: '/auth/forgot-password',

  // Защищенные маршруты
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  MY_TRIALS: '/my-trials',
  MY_BOOKINGS: '/my-bookings',

  // Динамические
  TRIAL_DETAILS: '/trials/:id',
  CLUB_DETAILS: '/clubs/:id',
  USER_PROFILE: '/users/:id',
} as const;

export const APP_CONFIG = {
  authenticatedEntryPath: ROUTES.DASHBOARD,
  unauthenticatedEntryPath: ROUTES.HOME,
  redirectQueryKey: 'redirect',
};
```

### Шаг 5: UI компоненты

Создайте `src/shared/ui/Button/Button.tsx`:

```tsx
import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.button, styles[variant], styles[size], {
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};
```

Создайте `src/shared/ui/Button/Button.module.css`:

```css
.button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.primary {
  background-color: #1976d2;
  color: white;
}

.primary:hover {
  background-color: #1565c0;
}

.secondary {
  background-color: #f5f5f5;
  color: #333;
}

.secondary:hover {
  background-color: #eeeeee;
}

.outline {
  background-color: transparent;
  border: 2px solid #1976d2;
  color: #1976d2;
}

.outline:hover {
  background-color: #1976d2;
  color: white;
}

.small {
  padding: 4px 8px;
  font-size: 12px;
}

.medium {
  padding: 8px 16px;
  font-size: 14px;
}

.large {
  padding: 12px 24px;
  font-size: 16px;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

Создайте `src/shared/ui/index.ts`:

```typescript
export { Button } from './Button/Button';
```

### Шаг 6: Хуки и утилиты

Создайте `src/shared/lib/hooks/useAuth.ts`:

```typescript
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

export const useAuth = () => {
  const { isAuthenticated, user, loading } = useSelector(
    (state: RootState) => state.auth
  );

  return {
    isAuthenticated,
    user,
    loading,
    hasRole: (role: string) => user?.roles?.includes(role) || false,
    hasAnyRole: (roles: string[]) =>
      roles.some(role => user?.roles?.includes(role)) || false,
  };
};
```

Создайте `src/shared/lib/index.ts`:

```typescript
export { useAuth } from './hooks/useAuth';
```

---

## 👤 Entities слой

### Шаг 7: Сущность User

Создайте `src/entities/user/model/types.ts`:

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
  avatar?: string;
  isCoach?: boolean;
  isPlayer?: boolean;
  clubId?: string;
}

export interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}
```

Создайте `src/entities/user/model/slice.ts`:

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from './types';

const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    clearUser: state => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const { setLoading, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
```

Создайте `src/entities/user/index.ts`:

```typescript
export { userSlice, setUser, clearUser, setLoading } from './model/slice';
export type { User, UserState } from './model/types';
```

### Шаг 8: Сущность Trial

Создайте `src/entities/trial/model/types.ts`:

```typescript
export interface Trial {
  id: string;
  title: string;
  description: string;
  clubId: string;
  clubName: string;
  date: string;
  time: string;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  price: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  ageGroup: string;
  requirements: string[];
  createdAt: string;
}

export interface TrialState {
  trials: Trial[];
  currentTrial: Trial | null;
  loading: boolean;
  error: string | null;
}
```

Создайте `src/entities/trial/index.ts`:

```typescript
export type { Trial, TrialState } from './model/types';
```

---

## ⚡ Features слой

### Шаг 9: Фича аутентификации

Создайте `src/features/auth/ui/LoginForm/LoginForm.tsx`:

```tsx
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../../../../shared/ui';
import { APP_CONFIG } from '../../../../shared/config/routes';
import styles from './LoginForm.module.css';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Здесь будет логика входа
      console.log('Login:', { email, password });

      // Симуляция успешного входа
      setTimeout(() => {
        const redirectPath =
          searchParams.get(APP_CONFIG.redirectQueryKey) ||
          APP_CONFIG.authenticatedEntryPath;
        navigate(redirectPath, { replace: true });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Вход в систему</h2>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <Button type="submit" variant="primary" size="large" disabled={loading}>
          {loading ? 'Вход...' : 'Войти'}
        </Button>
      </form>
    </div>
  );
};
```

Создайте `src/features/auth/ui/LoginForm/LoginForm.module.css`:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.title {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.field {
  margin-bottom: 1rem;
}

.field label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
}

.input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.input:focus {
  outline: none;
  border-color: #1976d2;
  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
}
```

Создайте `src/features/auth/index.ts`:

```typescript
export { LoginForm } from './ui/LoginForm/LoginForm';
```

### Шаг 10: Фича поиска проб

Создайте `src/features/trial-search/ui/SearchFilters/SearchFilters.tsx`:

```tsx
import React from 'react';
import { Button } from '../../../../shared/ui';
import styles from './SearchFilters.module.css';

interface SearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  location?: string;
  level?: string;
  ageGroup?: string;
  date?: string;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const [filters, setFilters] = React.useState<SearchFilters>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>Поиск проб</h3>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Локация</label>
            <input
              type="text"
              placeholder="Город или регион"
              value={filters.location || ''}
              onChange={e =>
                setFilters({ ...filters, location: e.target.value })
              }
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Уровень</label>
            <select
              value={filters.level || ''}
              onChange={e => setFilters({ ...filters, level: e.target.value })}
              className={styles.select}
            >
              <option value="">Любой</option>
              <option value="beginner">Начинающий</option>
              <option value="intermediate">Средний</option>
              <option value="advanced">Продвинутый</option>
            </select>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Возрастная группа</label>
            <select
              value={filters.ageGroup || ''}
              onChange={e =>
                setFilters({ ...filters, ageGroup: e.target.value })
              }
              className={styles.select}
            >
              <option value="">Любая</option>
              <option value="u16">До 16 лет</option>
              <option value="u18">До 18 лет</option>
              <option value="u21">До 21 года</option>
              <option value="senior">Взрослые</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Дата</label>
            <input
              type="date"
              value={filters.date || ''}
              onChange={e => setFilters({ ...filters, date: e.target.value })}
              className={styles.input}
            />
          </div>
        </div>

        <Button type="submit" variant="primary">
          Найти пробы
        </Button>
      </form>
    </div>
  );
};
```

Создайте `src/features/trial-search/ui/SearchFilters/SearchFilters.module.css`:

```css
.container {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.form h3 {
  margin-bottom: 1rem;
  color: #333;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
}

.field label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
}

.input,
.select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
}

.input:focus,
.select:focus {
  outline: none;
  border-color: #1976d2;
}

@media (max-width: 768px) {
  .row {
    grid-template-columns: 1fr;
  }
}
```

Создайте `src/features/trial-search/index.ts`:

```typescript
export { SearchFilters } from './ui/SearchFilters/SearchFilters';
```

---

## 📄 Pages слой

### Шаг 11: Создание страниц

Создайте `src/pages/HomePage/HomePage.tsx`:

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { SearchFilters } from '../../features/trial-search';
import { Button } from '../../shared/ui';
import { ROUTES } from '../../shared/config/routes';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
    // TODO: Логика поиска
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Найди свою футбольную команду</h1>
          <p>Маркетплейс футбольных проб для игроков и тренеров</p>
          <div className={styles.heroActions}>
            <Link to={ROUTES.TRIALS}>
              <Button variant="primary" size="large">
                Найти пробы
              </Button>
            </Link>
            <Link to={ROUTES.SIGN_UP}>
              <Button variant="outline" size="large">
                Зарегистрироваться
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.search}>
        <SearchFilters onSearch={handleSearch} />
      </section>

      <section className={styles.features}>
        <h2>Почему выбирают нас</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <h3>🏆 Проверенные клубы</h3>
            <p>Все клубы проходят верификацию</p>
          </div>
          <div className={styles.feature}>
            <h3>⚡ Быстрое бронирование</h3>
            <p>Забронируй пробу в один клик</p>
          </div>
          <div className={styles.feature}>
            <h3>📊 Аналитика</h3>
            <p>Отслеживай свой прогресс</p>
          </div>
        </div>
      </section>
    </div>
  );
};
```

Создайте `src/pages/HomePage/HomePage.module.css`:

```css
.container {
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.heroContent h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.heroContent p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.heroActions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.search {
  padding: 2rem;
  background-color: #f8f9fa;
}

.features {
  padding: 4rem 2rem;
  text-align: center;
}

.features h2 {
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #333;
}

.featuresGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.feature h3 {
  margin-bottom: 1rem;
  color: #333;
}

.feature p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .heroContent h1 {
    font-size: 2rem;
  }

  .heroActions {
    flex-direction: column;
    align-items: center;
  }
}
```

Создайте `src/pages/TrialsPage/TrialsPage.tsx`:

```tsx
import React from 'react';
import { SearchFilters } from '../../features/trial-search';
import styles from './TrialsPage.module.css';

// Мок данные
const mockTrials = [
  {
    id: '1',
    title: 'Проба в академию Спартак',
    clubName: 'ФК Спартак Москва',
    date: '2024-02-15',
    time: '10:00',
    location: 'Москва, Сокольники',
    level: 'intermediate',
    ageGroup: 'u18',
    price: 2000,
    currentParticipants: 8,
    maxParticipants: 20,
  },
  {
    id: '2',
    title: 'Отбор в молодежную команду',
    clubName: 'ФК Динамо',
    date: '2024-02-18',
    time: '14:00',
    location: 'Москва, Петровский парк',
    level: 'advanced',
    ageGroup: 'u21',
    price: 3000,
    currentParticipants: 15,
    maxParticipants: 25,
  },
];

export const TrialsPage: React.FC = () => {
  const [trials, setTrials] = React.useState(mockTrials);

  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
    // TODO: Фильтрация проб
  };

  return (
    <div className={styles.container}>
      <h1>Футбольные пробы</h1>

      <SearchFilters onSearch={handleSearch} />

      <div className={styles.trials}>
        {trials.map(trial => (
          <div key={trial.id} className={styles.trialCard}>
            <h3>{trial.title}</h3>
            <p className={styles.club}>{trial.clubName}</p>
            <div className={styles.details}>
              <span>
                📅 {trial.date} в {trial.time}
              </span>
              <span>📍 {trial.location}</span>
              <span>
                👥 {trial.currentParticipants}/{trial.maxParticipants}
              </span>
              <span>💰 {trial.price} ₽</span>
            </div>
            <div className={styles.tags}>
              <span className={styles.tag}>{trial.level}</span>
              <span className={styles.tag}>{trial.ageGroup}</span>
            </div>
            <button className={styles.bookButton}>Забронировать</button>
          </div>
        ))}
      </div>
    </div>
  );
};
```

Создайте `src/pages/TrialsPage/TrialsPage.module.css`:

```css
.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.container h1 {
  margin-bottom: 2rem;
  color: #333;
}

.trials {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.trialCard {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
}

.trialCard h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.club {
  color: #1976d2;
  font-weight: 500;
  margin-bottom: 1rem;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #555;
}

.bookButton {
  width: 100%;
  padding: 0.75rem;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.bookButton:hover {
  background: #1565c0;
}
```

Создайте файлы индексов для страниц:

`src/pages/HomePage/index.ts`:

```typescript
export { HomePage } from './HomePage';
```

`src/pages/TrialsPage/index.ts`:

```typescript
export { TrialsPage } from './TrialsPage';
```

`src/pages/AuthPage/index.ts`:

```typescript
export { AuthPage } from './AuthPage';
```

Создайте `src/pages/AuthPage/AuthPage.tsx`:

```tsx
import React from 'react';
import { LoginForm } from '../../features/auth';

export const AuthPage: React.FC = () => {
  return <LoginForm />;
};
```

---

## 🏛️ Widgets слой

### Шаг 12: Создание виджетов

Создайте `src/widgets/header/ui/Header.tsx`:

```tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../shared/ui';
import { useAuth } from '../../../shared/lib';
import { ROUTES } from '../../../shared/config/routes';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Логика выхода
    console.log('Logout');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={ROUTES.HOME} className={styles.logo}>
          ⚽ FootballTrials
        </Link>

        <nav className={styles.nav}>
          <Link to={ROUTES.TRIALS}>Пробы</Link>
          <Link to={ROUTES.CLUBS}>Клубы</Link>
          <Link to={ROUTES.ABOUT}>О нас</Link>
        </nav>

        <div className={styles.actions}>
          {isAuthenticated ? (
            <div className={styles.userMenu}>
              <Link to={ROUTES.DASHBOARD}>
                <Button variant="secondary">Панель</Button>
              </Link>
              <Button variant="outline" onClick={handleLogout}>
                Выйти
              </Button>
            </div>
          ) : (
            <div className={styles.authButtons}>
              <Link to={ROUTES.SIGN_IN}>
                <Button variant="outline">Войти</Button>
              </Link>
              <Link to={ROUTES.SIGN_UP}>
                <Button variant="primary">Регистрация</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
```

Создайте `src/widgets/header/ui/Header.module.css`:

```css
.header {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1976d2;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
}

.nav a:hover {
  color: #1976d2;
}

.actions {
  display: flex;
  align-items: center;
}

.userMenu,
.authButtons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .container {
    padding: 0 1rem;
  }
}
```

Создайте `src/widgets/header/index.ts`:

```typescript
export { Header } from './ui/Header';
```

---

## 🎯 App слой

### Шаг 13: Провайдеры

Создайте `src/app/providers/RouterProvider.tsx`:

```tsx
import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../../shared/config/routes';

// Импорты страниц
import { HomePage } from '../../pages/HomePage';
import { TrialsPage } from '../../pages/TrialsPage';
import { AuthPage } from '../../pages/AuthPage';

const LoadingSpinner: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    }}
  >
    Загрузка...
  </div>
);

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Публичные маршруты */}
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.TRIALS} element={<TrialsPage />} />
        <Route path={ROUTES.SIGN_IN} element={<AuthPage />} />

        {/* Пока что простые маршруты без защиты */}
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <div style={{ padding: '2rem' }}>
              <h1>Панель управления</h1>
              <p>Скоро здесь будет ваша панель!</p>
            </div>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h1>404 - Страница не найдена</h1>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};
```

Создайте `src/app/store/index.ts`:

```typescript
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../../entities/user';

export const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

Создайте `src/app/providers/StoreProvider.tsx`:

```tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
```

### Шаг 14: Главный компонент App

Создайте `src/app/App.tsx`:

```tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './providers/StoreProvider';
import { AppRouter } from './providers/RouterProvider';
import { Header } from '../widgets/header';
import './styles/global.css';

export const App: React.FC = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main className="main">
            <AppRouter />
          </main>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
};
```

Создайте `src/app/styles/global.css`:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
}

input,
select,
textarea {
  font-family: inherit;
}
```

### Шаг 15: Точка входа

Обновите `src/index.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 🧪 Интеграция и тестирование

### Шаг 16: Запуск проекта

```bash
# Запуск проекта
npm start
```

Ваше приложение должно запуститься на `http://localhost:3000` со следующими страницами:

- `/` - Главная страница с поиском
- `/trials` - Список проб
- `/auth/sign-in` - Страница входа
- `/dashboard` - Панель управления (заглушка)

### Шаг 17: Структура проекта FSD

Финальная структура должна выглядеть так:

```
src/
├── app/                           # Слой приложения
│   ├── providers/
│   │   ├── RouterProvider.tsx
│   │   └── StoreProvider.tsx
│   ├── store/
│   │   └── index.ts
│   ├── styles/
│   │   └── global.css
│   └── App.tsx
├── pages/                         # Слой страниц
│   ├── HomePage/
│   │   ├── HomePage.tsx
│   │   ├── HomePage.module.css
│   │   └── index.ts
│   ├── TrialsPage/
│   └── AuthPage/
├── widgets/                       # Слой виджетов
│   └── header/
│       ├── ui/
│       │   ├── Header.tsx
│       │   └── Header.module.css
│       └── index.ts
├── features/                      # Слой фич
│   ├── auth/
│   │   ├── ui/
│   │   │   └── LoginForm/
│   │   └── index.ts
│   └── trial-search/
│       ├── ui/
│       │   └── SearchFilters/
│       └── index.ts
├── entities/                      # Слой сущностей
│   ├── user/
│   │   ├── model/
│   │   │   ├── types.ts
│   │   │   └── slice.ts
│   │   └── index.ts
│   └── trial/
│       ├── model/
│       │   └── types.ts
│       └── index.ts
└── shared/                        # Слой общих ресурсов
    ├── config/
    │   └── routes.ts
    ├── lib/
    │   ├── hooks/
    │   │   └── useAuth.ts
    │   └── index.ts
    ├── types/
    │   ├── route.ts
    │   └── navigation.ts
    └── ui/
        ├── Button/
        │   ├── Button.tsx
        │   └── Button.module.css
        └── index.ts
```

---

## 🚀 Следующие шаги

### Что можно добавить:

1. **Защищенные маршруты** с проверкой аутентификации
2. **Роли пользователей** (игрок, тренер, администратор)
3. **Бронирование проб** с формами и валидацией
4. **Профили пользователей** с возможностью редактирования
5. **Интеграция с API** для реальных данных
6. **Тесты** для компонентов и хуков
7. **Мобильная адаптация** с responsive дизайном
8. **Уведомления** о новых пробах
9. **Система рейтингов** клубов и игроков
10. **Чат** между игроками и тренерами

### Преимущества FSD архитектуры:

✅ **Четкая структура** - легко понять, где что находится  
✅ **Масштабируемость** - легко добавлять новые фичи  
✅ **Переиспользование** - компоненты не дублируются  
✅ **Тестируемость** - каждый слой можно тестировать отдельно  
✅ **Командная работа** - разные разработчики могут работать над разными слоями

Эта архитектура идеально подходит для создания сложных приложений, таких как ваш футбольный маркетплейс! ⚽

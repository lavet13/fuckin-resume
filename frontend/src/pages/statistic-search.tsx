import { FC } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { ScrollArea } from '@radix-ui/react-scroll-area';

interface SearchResult {
  query: string;
  google: number;
  yandex: number;
  bing: number;
}

interface TableData {
  title: string;
  date: string;
  russianData: SearchResult[];
  englishData: SearchResult[];
}

const tablesData: TableData[] = [
  {
    title: 'Отчет о поиске за 01.10.2023 г.',
    date: '01.10.2023',
    englishData: [
      {
        query:
          "Hardware optimization of control unit's logic circuit on programmable logic devices",
        google: 605_000,
        yandex: 4_000_000,
        bing: 35_100,
      },
      { query: 'Petr Petrov, DonNTU', google: 33, yandex: 161, bing: 3 },
      {
        query: 'Hardware optimization',
        google: 59_100_000,
        yandex: 23_000_000,
        bing: 19_900_000,
      },
      {
        query: 'Logic circuit of control units',
        google: 3_150_000,
        yandex: 12_000_000,
        bing: 21_100_000,
      },
      {
        query: 'Control unit',
        google: 180_000_000,
        yandex: 180_000_000,
        bing: 301_000_000,
      },
    ],
    russianData: [
      {
        query:
          'Оптимизация аппаратурных затрат в логических схемах устройств управления',
        google: 10_100,
        yandex: 2_000_000,
        bing: 429,
      },
      {
        query: 'Петров Петр Петрович, ДонНТУ',
        google: 101,
        yandex: 4_238,
        bing: 183,
      },
      {
        query: 'Оптимизация аппаратурных затрат',
        google: 38_100,
        yandex: 2_000_000,
        bing: 10_100,
      },
      {
        query: 'Логические схемы устройств управления',
        google: 1_700_200,
        yandex: 6_000_000,
        bing: 1_190_000,
      },
      {
        query: 'Устройства управления',
        google: 195_500_000,
        yandex: 77_000_000,
        bing: 28_200_000,
      },
    ],
  },
  {
    title: 'Отчет о поиске за 01.12.2023 г.',
    date: '01.12.2023',
    englishData: [
      {
        query:
          "Hardware optimization of control unit's logic circuit on programmable logic devices",
        google: 615_000,
        yandex: 4_000_000,
        bing: 37_200,
      },
      { query: 'Petr Petrov, DonNTU', google: 39, yandex: 171, bing: 3 },
      {
        query: 'Hardware optimization',
        google: 60_200_000,
        yandex: 25_000_000,
        bing: 21_100_000,
      },
      {
        query: 'Logic circuit of control units',
        google: 3_650_000,
        yandex: 12_000_000,
        bing: 22_800_000,
      },
      {
        query: 'Control unit',
        google: 184_000_000,
        yandex: 181_000_000,
        bing: 318_000_000,
      },
    ],
    russianData: [
      {
        query:
          'Оптимизация аппаратурных затрат в логических схемах устройств управления',
        google: 10_400,
        yandex: 2_000_000,
        bing: 442,
      },
      {
        query: 'Петров Петр Петрович, ДонНТУ',
        google: 107,
        yandex: 4_678,
        bing: 196,
      },
      {
        query: 'Оптимизация аппаратурных затрат',
        google: 39_700,
        yandex: 2_000_000,
        bing: 10_700,
      },
      {
        query: 'Логические схемы устройств управления',
        google: 1_800_200,
        yandex: 7_000_000,
        bing: 1_380_000,
      },
      {
        query: 'Устройства управления',
        google: 199_000_000,
        yandex: 80_000_000,
        bing: 29_100_000,
      },
    ],
  },
];

const calculatePercentageChanges = (oldData: TableData, newData: TableData) => {
  const changes: SearchResult[] = [];

  const processData = (
    oldResults: SearchResult[],
    newResults: SearchResult[],
  ) => {
    console.log({ oldResults, newResults });
    oldResults.forEach((oldResult, index) => {
      const newResult = newResults[index];
      changes.push({
        query: oldResult.query,
        google: calculateChange(oldResult.google, newResult.google),
        yandex: calculateChange(oldResult.yandex, newResult.yandex),
        bing: calculateChange(oldResult.bing, newResult.bing),
      });
    });
  };

  processData(oldData.russianData, newData.russianData);
  processData(oldData.englishData, newData.englishData);

  console.log({ changes });

  return changes;
};

const calculateChange = (oldValue: number, newValue: number) => {
  const old = oldValue;
  const newVal = newValue;
  console.log({ old, newVal });
  return old === 0 ? 0 : Math.round(((newVal - old) / old) * 100);
};

const percentageChanges = calculatePercentageChanges(
  tablesData[0],
  tablesData[1],
);

const chartConfig = {
  google: {
    label: 'Google',
    color: 'hsl(var(--chart-1))',
  },
  yandex: {
    label: 'Яндекс',
    color: 'hsl(var(--chart-2))',
  },
  bing: {
    label: 'Bing',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

const chartData = percentageChanges.map((change, index) => ({
  query: `P${index + 1}`,
  google: change.google,
  yandex: change.yandex,
  bing: change.bing,
}));

console.log({ chartData });

const renderTable = (tableData: TableData) => {
  return (
    <>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Отчет о поиске за {tableData.date}
      </h2>
      <div className='my-6 w-full overflow-y-auto'>
        <table className='w-full'>
          <thead>
            <tr className='m-0 border-t p-0 even:bg-muted'>
              <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                Строка поиска
              </th>
              <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                Google
              </th>
              <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                Яндекс
              </th>
              <th className='border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right'>
                Bing
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={4}
                className='border px-4 py-2 font-bold bg-background'
              >
                На русском языке
              </td>
            </tr>
            {renderTableRows(tableData.russianData)}
            <tr>
              <td
                colSpan={4}
                className='border px-4 py-2 font-bold bg-background'
              >
                На английском языке
              </td>
            </tr>
            {renderTableRows(tableData.englishData)}
          </tbody>
        </table>
      </div>
    </>
  );
};

const renderTableRows = (data: SearchResult[]) => {
  return data.map((row, index) => (
    <tr key={index} className='m-0 border-t p-0 even:bg-muted'>
      <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
        {row.query}
      </td>
      <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
        {row.google}
      </td>
      <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
        {row.yandex}
      </td>
      <td className='border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'>
        {row.bing}
      </td>
    </tr>
  ));
};

const StatisticSearchPage: FC = () => {
  return (
    <div className='container xl:max-w-screen-xl flex-grow'>
      <div className='relative py-6 lg:gap-10 lg:py-8 lg:grid lg:grid-cols-[1fr_400px]'>
        <div className='mx-auto w-full min-w-0'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Отчет об информационном поиске
          </h1>
          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Собственные публикации и доклады
          </h2>
          <p className={'leading-7 [&:not(:first-child)]:mt-6'}>
            Представленный отчет позволяет оценить информационную ситуацию по
            теме магистерской работы. Он является основным документальным
            подтверждением глубины и полноты информационного поиска, а также
            служит для фиксации текущей ситуации в исследуемой области.
          </p>
          <p className={'leading-7 [&:not(:first-child)]:mt-6'}>
            Поиск выполнен с использованием трех поисковых систем (
            <a
              href='https://google.com/'
              target='_blank'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              Google
            </a>
            ,{' '}
            <a
              href='https://ya.ru/'
              target='_blank'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              Яндекс
            </a>
            ,{' '}
            <a
              href='https://bing.com/'
              target='_blank'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              Bing
            </a>
            ). Результаты сведены в таблицу. Всего произведено 10 запросов,
            имеющих отношение к магистерской работе. Из них два запроса
            соответствует названию магистерской работы на двух языках, два
            запроса с ФИО руководителя, а также шесть запросов с ключевыми
            понятиями по теме магистерской работы.
          </p>

          <p className={'leading-7 [&:not(:first-child)]:mt-6'}>
            Ниже приведены две таблицы с отчетами о поиске, которые разделяет
            временной промежуток в два месяца, а также диаграммы, которые
            позволяют сравнить основные изменения, произошедшие за этот период.
          </p>

          {tablesData.map(table => renderTable(table))}

          <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            Анализ результатов
          </h2>
          <p className={'leading-7 [&:not(:first-child)]:mt-6'}>
            Сравнивая результаты запросов по различным поисковым системам, можно
            прийти к выводу, что наилучшие результаты показала система{' '}
            <a
              href='https://google.com/'
              target='_blank'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              Google.
            </a>{' '}
            Во всех случаях было найдено достаточное количество документов на
            всех языках. Необходимо отметить, что поисковая система{' '}
            <a
              href='https://ya.ru/'
              target='_blank'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              Яндекс
            </a>{' '}
            при большом числе найденных страниц не дает возможности
            зафиксировать их точное количество. Поэтому в таблице для{' '}
            <a
              href='https://ya.ru/'
              target='_blank'
              rel='noreferrer'
              className={
                'break-words inline-flex font-medium text-primary hover:decoration-2 underline underline-offset-4 leading-5'
              }
            >
              Яндекса
            </a>{' '}
            и приведены приблизительные значения, которые предоставляет
            поисковая система. При сравнении и анализе результатов в отчетах о
            поиске, которые разделяют два месяца, необходимо отметить, что для
            всех поисковых запросах количество найденных страниц выросло.
            Процент изменения для каждого запроса в каждой из поисковых систем
            приведен на диаграмме ниже.
          </p>

          <Card className='mt-5'>
            <CardHeader>
              <CardTitle>
                Процент изменения результатов поисковой выдачи в отчетах о
                поиске
              </CardTitle>
              <CardDescription>Сравнение Google, Яндекс, Bing</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                className='min-h-[200px] w-full'
                config={chartConfig}
              >
                <BarChart accessibilityLayer data={chartData}>
                  <XAxis
                    dataKey='query'
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <YAxis type='number' tickFormatter={value => `${value}%`} />
                  <Bar
                    dataKey='google'
                    fill='var(--color-google)'
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey='yandex'
                    fill='var(--color-yandex)'
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey='bing'
                    fill='var(--color-bing)'
                    radius={[0, 0, 4, 4]}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    cursor={false}
                    defaultIndex={1}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Выводы  */}

          <p className={'leading-7 [&:not(:first-child)]:mt-6'}>
            Из диаграммы можно сделать вывод, что максимальный рост поисковой
            выдачи на превышает 20 %, а для некоторых запросов количество
            найденных страниц не изменилось. Диаграмма также позволяет оценить
            изменения для каждого выполненного запроса.
          </p>

          <p className={'leading-7 [&:not(:first-child)]:mt-6'}>
            Так, например, количество найденных страниц в поисковой системе
            Google для запроса Logic circuit of control units выросло на 16 %, а
            поисковая выдача по запросу Устройства управления в системе Bing
            возросла лишь на ≈3 %. При этом количество страниц по некоторым
            запросам существенно не изменилось (например, Оптимизация
            аппаратурных затрат в системе Яндекс).
          </p>
        </div>

        <div className='hidden text-sm xl:block'>
          <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-4">
            <ScrollArea className="relative overflow-hidden h-full pb-10">
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticSearchPage;

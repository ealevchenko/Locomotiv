USE [loko_nw]
GO
/****** Object:  Table [dbo].[RefUnit]    Script Date: 29.12.2020 23:27:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RefUnit](
	[idUnit] [int] IDENTITY(1,1) NOT NULL,
	[IDSystem] [int] NOT NULL,
	[Unit] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_RefUnit] PRIMARY KEY CLUSTERED 
(
	[idUnit] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[RefUnit] ON 

INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (1, 1, N'Блок дизеля')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (2, 1, N'Крышка цилиндра')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (3, 1, N'Коробка клапанная')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (4, 1, N'Коленвал')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (5, 1, N'Распределительный вал')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (6, 1, N'Цилиндровая втулка')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (7, 1, N'Поршень ')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (8, 1, N'Клапан')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (9, 1, N'Шатун')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (10, 1, N'Коренной подшипник')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (11, 1, N'Шатунный подшипник')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (12, 1, N'Коллектор выхлопной')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (13, 1, N'Маслоподкачивающий насос')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (14, 1, N'Фильтр маслянный')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (15, 1, N'Секция охлаждения маслянная')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (16, 1, N'Главный маслянный насос')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (17, 1, N'Трубопровод маслянный')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (18, 1, N'Турбокомпрессор')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (19, 1, N'Фильтр воздушный')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (20, 1, N'Унифицированная гидропередача')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (21, 2, N'Главный генератор')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (22, 2, N'Двухмашинный агрегат')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (23, 2, N'Двигатель тяговый')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (24, 2, N'Камера высоковольтная')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (25, 2, N'Проводка сигнальная')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (26, 2, N'Провод силовой ГГ - ТЭД')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (27, 2, N'Пульт управления машиниста')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (28, 2, N'Буферные сигнальные огни')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (29, 2, N'Главный прожектор')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (30, 2, N'Аккумуляторная батарея')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (31, 2, N'Датчик температуры ОЖ')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (32, 2, N'Датчик температуры масла')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (33, 2, N'Датчик давления масла')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (34, 2, N'Датчик давления топлива')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (35, 2, N'Вспомогательный генератор')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (36, 2, N'Стартер')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (37, 3, N'Компрессор поршневой')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (38, 3, N'Редуктор привода компрессора')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (39, 3, N'Резервуар воздушный')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (40, 3, N'Трубопровод воздушный')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (41, 3, N'Регулятор давления 3РД')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (42, 3, N'Кран машиниста')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (43, 3, N'Главный воздухораспределитель')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (44, 3, N'Пневмосервопривод ШХ')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (45, 3, N'Пневмосервопривод СА-3')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (46, 3, N'Тормозная колодка')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (47, 3, N'Цилиндр тормозной')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (48, 3, N'Форсунка песочная')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (49, 3, N'Бункер песочный')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (50, 3, N'Трубопровод песочный')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (51, 3, N'Гидроредуктор привода компрессора')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (52, 4, N'Осевой редуктор')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (53, 4, N'Рама тепловоза')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (54, 4, N'Подметельник')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (55, 4, N'Подножка')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (56, 4, N'Тележка')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (57, 4, N'Рессора')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (58, 4, N'Колесная пара')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (59, 4, N'Моторно-осевой подшипник')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (60, 4, N'Колесо-моторный блок')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (61, 4, N'Шкворень')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (62, 4, N'Опора скольжения')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (63, 4, N'Автосцепка')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (64, 4, N'Рессорное подвешивание')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (65, 4, N'Тормозная рычажная передача')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (66, 4, N'Пружина подвески')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (67, 4, N'Гаситель колебаний')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (68, 4, N'Букса')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (69, 4, N'Кабина машиниста')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (70, 5, N'Помпа водяная')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (71, 5, N'Секция охлаждения водяная')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (72, 5, N'Расширительный бак системы охлаждения')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (73, 5, N'Трубопровод шахты холодильника')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (74, 5, N'Водяной коллектор')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (75, 5, N'Редуктор вентилятора шахты холодильника')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (76, 5, N'Вал привода шахты холодильника')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (77, 5, N'Калорифер')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (78, 6, N'Бак топливный')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (79, 6, N'Топливопрокачивающий насос')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (80, 6, N'Фильтр топливный')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (81, 6, N'Топливоподогреватель')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (82, 6, N'Блок топливных насосов')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (83, 6, N'Регулятор частоты оборотов')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (84, 6, N'Топливный насос высокого давления')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (85, 6, N'Топливопровод высокого давления')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (86, 6, N'Распылитель форсунки')
INSERT [dbo].[RefUnit] ([idUnit], [IDSystem], [Unit]) VALUES (87, 6, N'Вал привода БТН')
SET IDENTITY_INSERT [dbo].[RefUnit] OFF
ALTER TABLE [dbo].[RefUnit]  WITH CHECK ADD  CONSTRAINT [FK_RefUnit_RefSystems] FOREIGN KEY([IDSystem])
REFERENCES [dbo].[RefSystems] ([idSystem])
GO
ALTER TABLE [dbo].[RefUnit] CHECK CONSTRAINT [FK_RefUnit_RefSystems]
GO

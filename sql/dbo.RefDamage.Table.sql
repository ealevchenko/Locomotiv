USE [loko_nw]
GO
/****** Object:  Table [dbo].[RefDamage]    Script Date: 29.12.2020 23:27:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RefDamage](
	[idDamage] [int] IDENTITY(1,1) NOT NULL,
	[Damage] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_RefDamage] PRIMARY KEY CLUSTERED 
(
	[idDamage] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[RefDamage] ON 

INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (1, N'Заклинил клапан компрессора')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (2, N'Не работает кран машиниста')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (3, N'заглушен ТЦ')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (4, N'Оборван ТЦ')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (5, N'Повреждена форсунка песочницы')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (6, N'Разрушение полужесткой муфты ТК')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (7, N'Подклинивание крана машиниста №394')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (8, N'Не отрегулирован ЗРД')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (9, N'Пробой прокладк цилиндра компрессора')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (10, N'Отказ пневмовентиля песочной системы')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (11, N'Неисправен кран № 394')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (12, N'Низкая производительность компрессора')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (13, N'Оборвана форсунка подачи песка')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (14, N'Стук при работе компрессора')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (15, N'Подвисание клапана компрессора')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (16, N'Отсутствует давление масла')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (17, N'Лопнул маслянный дюрит')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (18, N'Нет переключения УГП')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (19, N'Течь масла по трубке')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (20, N'Нет давления масла')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (21, N'Слабое давление масла дизеля')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (22, N'Течь воды по турбокомпрессору')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (23, N'Пробой газов в водяную системую')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (24, N'повреждена маслянная трубка УГП')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (25, N'Масляный дюрит')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (26, N'Нет охлаждения дизеля')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (27, N'Разжижение масла дизеля')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (28, N'Пробой газов выхлопного коллектора')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (29, N'Нет запуска дизеля')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (30, N'Повреждение маслоподкачивающего насоса')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (31, N'Разрушение муфты маслоподкачивающей помпы')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (32, N'Течь масла по циллиндровому комплекту')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (33, N'дизель идет в разнос')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (34, N'Требуется регулировка клапанов')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (35, N'Пробой выхлопных газов по турбокомпрессору')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (36, N'Заклинил вал ротора турбокомпрессора')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (37, N'Дизель не держит обороты')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (38, N'Вода в масле дизеля')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (39, N'Прогорел выхлопной коллектор')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (40, N'Течь масла по цилиндровой крышке дизеля')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (41, N'Стук в клапаной коробке')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (42, N'Повреждение муфты вентилятора')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (43, N'Течь расширительного бака')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (44, N'Течь водяного коллектора ШХ')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (45, N'Заклинивание водяной помпы')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (46, N'Разрушение промвала')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (47, N'Разрушение крестовины промвала')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (48, N'Заклинил ТНВД')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (49, N'Повреждение регулятора частоты оборотов')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (50, N'Отсутствует питание Блок-магнита')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (51, N'Щетки ТПН')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (52, N'течь топлива по коллектору')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (53, N'муфта привода ТПН')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (54, N'Повреждение рессорного подвешивания')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (55, N'Повреждение тормозной рычажной передачи')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (56, N'Лопнуло остекление кабины')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (57, N'Повреждение кожуха ТЭД')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (58, N'балансир рессороной подвески')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (59, N'оборван подметельник')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (60, N'Повреждена поперечная балка ТРП')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (61, N'Разрушена розетка СА-3')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (62, N'Клинит ТЭД')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (63, N'Разрушена пружина рессорной подвески')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (64, N'Предельный износ МОП')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (65, N'Повреждение шплинта на валке РП')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (66, N'Повреждение кабеля ТЭД')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (67, N'Лопнул ремень ДМА')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (68, N'Нет нагрузки ГГ')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (69, N'Нет проворота маховика')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (70, N'Повреждение тягового электродвигателя')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (71, N'Не собирается схема на движение "вперед"')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (72, N'Нет возбуждения ГВ')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (73, N'замыкание проводки')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (74, N'Не работают звуковые сигналы')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (75, N'Наличие "земли" в тяговых электродвигателях')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (76, N'Заклинил вал стартера')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (77, N'Неисправна АКБ')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (78, N'Неисправность двухмашинного агрегата')
INSERT [dbo].[RefDamage] ([idDamage], [Damage]) VALUES (79, N'Некорректная работа датчика температуры')
SET IDENTITY_INSERT [dbo].[RefDamage] OFF

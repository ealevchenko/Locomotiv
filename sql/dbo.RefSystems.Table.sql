USE [loko_nw]
GO
/****** Object:  Table [dbo].[RefSystems]    Script Date: 29.12.2020 23:27:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RefSystems](
	[idSystem] [int] NOT NULL,
	[System] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_RefSystems] PRIMARY KEY CLUSTERED 
(
	[idSystem] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[RefSystems] ([idSystem], [System]) VALUES (1, N'ДВС')
INSERT [dbo].[RefSystems] ([idSystem], [System]) VALUES (2, N'Электрическая')
INSERT [dbo].[RefSystems] ([idSystem], [System]) VALUES (3, N'Автотормозная')
INSERT [dbo].[RefSystems] ([idSystem], [System]) VALUES (4, N'Экипажная')
INSERT [dbo].[RefSystems] ([idSystem], [System]) VALUES (5, N'Охлаждения')
INSERT [dbo].[RefSystems] ([idSystem], [System]) VALUES (6, N'Топливная')
